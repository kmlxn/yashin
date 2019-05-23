import React, { Component } from 'react';
import { editorLanguages } from './db'

function normalizeLineEndings (str) {
	if (!str) return str;
	return str.replace(/\r\n|\r/g, '\n');
}

export default class extends Component {
  state = {}
  onCodeChange

  componentDidMount () {
    window.CodeMirror.modeURL = "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.34.0/mode/%N/%N.min.js";
    this.myCodeMirror = window.CodeMirror.fromTextArea(
      document.getElementById('dastur'),
      {
        lineNumbers: true,
        theme: this.props.theme || 'solarized light'
      }
    )

    this.myCodeMirror.on('change', editor =>
      this.onCodeChangeInternal(editor.getValue())
    );


    this.changeLanguage(this.props.languageId);
    this.myCodeMirror.setValue(this.props.code);
  }

  shouldComponentUpdate () {
    return false;
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.languageId !== this.props.languageId) {
      this.changeLanguage(nextProps.languageId)
    }
    if (normalizeLineEndings(nextProps.code) !==
      normalizeLineEndings(this.myCodeMirror.getValue())
    ) {
      this.myCodeMirror.setValue(nextProps.code)
    }
  }

  onCodeChangeInternal (code) {
    if (this.props.onCodeChange) {
      this.props.onCodeChange(code);
    }
  }

  render () {
    return <textarea
      id="dastur"
      className="form-control code"
      rows="8"
    ></textarea>
  }

  changeLanguage (languageId) {
    const langSupport = editorLanguages
    .find(l => l.languageId === languageId);

    const { mode: modeName } = window.CodeMirror.findModeByMIME(langSupport.mode.mime);
    
    // will mode switch work for python 3 and 2?
    this.myCodeMirror.setOption('mode', langSupport.mode.mime);
    window.CodeMirror.autoLoadMode(this.myCodeMirror, modeName);
  }
}