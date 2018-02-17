import React, { Component } from 'react';
import axios from 'axios';
import { exercises, languages } from './db'
import CodeMirrorComponent from './CodeMirrorComponent'
import ScrollableSelect from './ScrollableSelect'
import { isExercisePassed, saveExerciseResults } from './exerciseResults'


async function makeRunRequest ({ code, input, languageId }) {
  const data = new FormData();

  data.append('LanguageChoice', `${languageId}`);
  data.append('Program', code);
  data.append('Input', input);
  data.append('CompilerArgs', '');

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }
  
  let response
  try {
    response = await axios.post("http://rextester.com/rundotnet/api", data, config);
  } catch (error) {
    return { error };
  }

  return {
    data: {
      warnings: (response.data.Warnings || ""),
      errors: (response.data.Errors || ""),
      result: (response.data.Result || "").trim(),
      stats: (response.data.Stats || "")
    }
  };
}


class App extends Component {
  state = {
    languageId: languages[0].id,
    exerciseId: exercises[0].id,
    code: exercises[0].example[languages[0].id],
    input: exercises[0].tests[0].input,
    expectedOutput: exercises[0].tests[0].output,
    result: '',
    warnings: '',
    errors: '',
    stats: '',
    runButtonsDisabled: false,
    isTesting: false,
    isRunningOnce: false
  }

  async test () { 
    this.setState({
      result: '',
      warnings: '',
      errors: '',
      stats: '',
      runButtonsDisabled: true,
      isTesting: true,
    })
    const tests = exercises
      .find(({ id }) => id === this.state.exerciseId)
      .tests
    let responses = [];
    for (const t of tests) {
      responses.push(await makeRunRequest({
        code: this.state.code,
        input: t.input,
        languageId: this.state.languageId
      }));
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    const results = responses.map((res, index) => ({
      ...tests[index],
      ...res.data,
      requestError: res.error,
      passed: tests[index].output === res.data.result
    }));

    const testsPassed = results.every(({ passed }) => passed);

    if (testsPassed) {
      saveExerciseResults({
        id: this.state.exerciseId,
        passed: testsPassed,
        languageId: this.state.languageId
      })
    }

    this.setState({
      testsPassed,
      testResults: results,
      runButtonsDisabled: false,
      isTesting: false
    })
  }

  async run () {
    this.setState({
      testResults: undefined,
      runButtonsDisabled: true,
      isRunningOnce: true
    })
    
    const response = await makeRunRequest({
      code: this.state.code,
      input: this.state.input,
      languageId: this.state.languageId
    })
    this.setState({
      ...response.data,
      runButtonsDisabled: false,
      isRunningOnce: false
    })
  }

  onChangeExercise (exerciseIdStr) {
    const exerciseId = +exerciseIdStr;
    const exercise = exercises.find(({ id }) => id === exerciseId);

    this.setState({
      exerciseId: exerciseId,
      code: exercise.example[this.state.languageId]
        || "",
      input: exercise.tests[0].input,
      expectedOutput: exercise.tests[0].output
    })
  }

  onChangeLanguage (event) {
    const languageId = +event.target.value;
    const exercise = exercises.find(({ id }) => id === this.state.exerciseId);

    this.setState({
      languageId,
      code: exercise.example[languageId] || "",
    })
  }

  render() {
    const languageOptions =
      languages.map(({ id, name}) => <option key={id} value={id}>{name}</option>)
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
            
            <h1>
              <object id="svg1" style={{ width: '36px', height: '36px', marginBottom: '-6px' }} data="/bolt.svg" type="image/svg+xml">Logo</object>
              Yashin
            </h1>
              <p className="lead">Assalomu alaykum. Yashin – dasturlashni o'rganish uchun sayt.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>Til</p>
            <select
              className="form-control"
              value={this.state.languageId}    
              style={{ display: 'block' }}
              onChange={(event) => this.onChangeLanguage(event)}
            >
              {languageOptions}
            </select>
          </div>
          <div className="col-sm-6">
            <p>Masala</p>
            <ScrollableSelect
              value={this.state.exerciseId}
              onChange={value => this.onChangeExercise(value)}
              elems={exercises.map(({ id, text }) =>
                ({
                  value: id,
                  children: text,
                  highlighted: isExercisePassed({ id, languageId: this.state.languageId })
                }))
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>Dastur</p>
            <CodeMirrorComponent
              code={this.state.code}
              languageId={this.state.languageId}
              onCodeChange={code => this.setState({ code })}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>Kirish</p>
            <textarea
              className="form-control code"
              rows="3"
              value={this.state.input}
              onChange={event => this.setState({ input: event.target.value })}
            ></textarea>
          </div>
          <div className="col-sm-6">
            <p>Kutilgan natija</p>
            <textarea
              readOnly
              className="form-control code"
              rows="3"
              value={this.state.expectedOutput}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3" style={{ textAlign: 'right', marginTop: '30px' }}>          
            <button
              disabled={this.state.runButtonsDisabled}
              className="btn btn-primary"
              onClick={event => this.run()}
            >
              {this.state.isRunningOnce && <span className="glyphicon glyphicon-repeat fast-right-spinner"></span>}
              Bajarish
            </button>
          </div>
          <div className="col-xs-3" style={{ marginTop: '30px' }}>              
            <button
              disabled={this.state.runButtonsDisabled}
              className="btn btn-primary"
              onClick={event => this.test()}
            >
              {this.state.isTesting && <span className="glyphicon glyphicon-repeat fast-right-spinner"></span>}              
              Tekshirish
            </button>
          </div>
        </div>
        <hr />
        <div className="row">
          {
            this.state.testResults &&
            <div className="col-sm-12">
              <div className={`alert ${this.state.testsPassed ? 'alert-success' : 'alert-danger'}`}>
                <h4>Tekshiruv natijarali: {this.state.testsPassed ? 'yaxshi' : 'yomon'}</h4>
                {
                  this.state.testResults
                    .map((tr, index) => <div key={index}>
                      {
                        tr.passed
                        ? <p>O'tdi: Ha</p>
                        : <p><strong>O'tdi: Yo'q</strong></p>
                      }
                      <div>Kiritilgan ma'lumotlar: <pre>{tr.input}</pre></div>
                      <div>Kutilgan ma'lumotlar: <pre>{tr.output}</pre></div>
                      {tr.result && <div>Dastur qaytargan ma'lumotlar: <pre>{tr.result}</pre></div>}
                      {tr.errors && <div>Xatoliklar: <pre>{tr.errors}</pre></div>}
                      {tr.warnings && <div>Ogohlantirishlar: <pre>{tr.warnings}</pre></div>}
                      <p>Hisobot: {tr.stats}</p>
                      <hr />
                    </div>)
                }
              </div>  
            </div>
          }
          {
            this.state.result &&
              <div className="col-sm-6">              
                <div className="alert alert-info">
                  <h4>Natija</h4>
                  <div><pre>{this.state.result}</pre></div>
                </div>
              </div>
          }
          {
            this.state.errors &&
              <div className="col-sm-6">              
                <div className="alert alert-danger">
                  <h4>Xatolik</h4>
                  <pre>{this.state.errors}</pre>
                </div>
              </div>
          }
          {
            this.state.warnings &&
              <div className="col-sm-6">              
                <div className="alert alert-warning">
                  <h4>Ogohlantirishlar</h4>
                  <pre>{this.state.warnings}</pre>
                </div>
              </div>
          }
          {
            this.state.stats &&
            <div className="col-sm-6">              
              <div className="alert alert-info">
                <h4>Hisobot</h4>
                <p>{this.state.stats}</p>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}


export default App;
