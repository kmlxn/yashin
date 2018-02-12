import React, { Component } from 'react';
import axios from 'axios';
import { exercises, languages } from './db'

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
  
  try {
    const response = await axios.post("http://rextester.com/rundotnet/api", data, config);
    return {
      data: {
        warnings: response.data.Warnings,
        errors: response.data.Errors,
        result: response.data.Result.trim(),
        stats: response.data.Stats
      }
    };
  } catch (error) {
    return { error };
  }
}


class App extends Component {
  state = {
    languageId: languages[0].id,
    exerciseId: exercises[0].id,
    code: exercises[0].example[languages[0].id],
    input: exercises[0].tests[0].input,
    result: '',
    warnings: '',
    errors: '',
    stats: ''
  }

  async test () { 
    this.setState({
      result: '',
      warnings: '',
      errors: '',
      stats: ''
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

    this.setState({ testsPassed, testResults: results })
  }

  async run () {
    this.setState({
      testResults: undefined
    })
    
    const response = await makeRunRequest({
      code: this.state.code,
      input: this.state.input,
      languageId: this.state.languageId
    })
    this.setState({
      ...response.data
    })
  }

  onChangeExercise (event) {
    const exerciseId = +event.target.value;
    this.setState({
      exerciseId: exerciseId,
      code: exercises
        .find(({ id }) => id === exerciseId)
        .example[this.state.languageId]
        || "",
      input: exercises
        .find(({ id }) => id === exerciseId)
        .tests[0].input
    })
  }

  onChangeLanguage (event) {
    const languageId = +event.target.value;

    this.setState({
      languageId,
      code: exercises
        .find(({ id }) => id === this.state.exerciseId)
        .example[languageId]
        || "",
      input: exercises
        .find(({ id }) => id === this.state.exerciseId)
        .tests[0].input
    })
  }

  render() {
    const languageOptions =
      languages.map(({ id, name}) => <option key={id} value={id}>{name}</option>)
    const exerciseOptions =
      exercises.map(({ id, text }) => <option key={id} value={id}>{text}</option>)

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h1>Uskuna</h1>
              <p className="lead">Assalomu alaykum. Bu dasturlashni o'rganish uchun sayt.</p>
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
            <select
              className="form-control"
              value={this.state.exerciseId}
              onChange={(event) => this.onChangeExercise(event)}
              style={{ display: 'block' }}
            >
              {exerciseOptions}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p>Dastur</p>
            <textarea
              className="form-control code"
              rows="8"
              value={this.state.code}
              onChange={event => this.setState({ code: event.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <p>Kirish</p>
            <textarea
              className="form-control code"
              rows="1"
              value={this.state.input}
              onChange={event => this.setState({ input: event.target.value })}
            ></textarea>
          </div>
          <div className="col-xs-3" style={{ textAlign: 'right' }}>          
            <button
              className="btn btn-primary"
              onClick={event => this.run()}>Bajarish</button>
          </div>
          <div className="col-xs-3">              
            <button
              className="btn btn-primary"
              onClick={event => this.test()}>Tekshirish</button>
          </div>
        </div>
        <div className="row">
            {
              this.state.testResults &&
              <div className="col-sm-12">
                <div class={`alert ${this.state.testsPassed ? 'alert-success' : 'alert-danger'}`}>
                  <h4>Tekshiruv natijarali: {this.state.testsPassed ? 'yaxshi' : 'yomon'}</h4>
                  <p>
                    {
                      this.state.testResults
                        .map((tr, index) => <div key={index}>
                          {
                            tr.passed
                            ? <p>O'tdi: Ha</p>
                            : <p><strong>O'tdi: Yo'q</strong></p>
                          }
                          <p>Kiritilgan ma'lumotlar: {tr.input}</p>
                          <p>Kutilgan ma'lumotlar: {tr.output}</p>
                          <p>Dastur qaytargan ma'lumotlar: {tr.result}</p>
                          <p>Hisobot: {tr.stats}</p>
                          {tr.errors && <p>Xatoliklar: {tr.errors}</p>}
                          {tr.warnings && <p>Ogohlantirishlar: {tr.warnings}</p>}
                          <hr />
                        </div>)
                    }
                  </p>
                </div>  
              </div>
            }
            {
              this.state.result &&
                <div className="col-sm-6">              
                  <div class="alert">
                    <h4>Natija</h4>
                    <p><pre>{this.state.result}</pre></p>
                  </div>
                </div>
            }
            {
              this.state.errors &&
                <div className="col-sm-6">              
                  <div class="alert alert-danger">
                    <h4>Xatolik</h4>
                    <p><pre>{this.state.errors}</pre></p>
                  </div>
                </div>
            }
            {
              this.state.warnings &&
                <div className="col-sm-6">              
                  <div class="alert alert-warning">
                    <h4>Ogohlantirishlar</h4>
                    <p><pre>{this.state.warnings}</pre></p>
                  </div>
                </div>
            }
            {
              this.state.stats &&
              <div className="col-sm-6">              
                <div class="alert alert-info">
                  <h4>Hisobot</h4>
                  <p><pre>{this.state.stats}</pre></p>
                </div>
              </div>
            }
          </div>
      </div>
    );
  }
}


export default App;
