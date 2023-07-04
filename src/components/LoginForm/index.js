// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errormsg: false,
    responseErrormsgUsername: '',
    responseErrormsgPassword: '',
    responseErrormsgUsernameAndPassword: '',
  }

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    const erros = {
      ermsg: data.error_msg,
    }

    if (response.ok === true) {
      const {history} = this.props
      history.replace('/')
    } else {
      const {ermsg} = erros

      if (ermsg.includes("didn't match")) {
        this.setState({
          errormsg: true,
          responseErrormsgUsernameAndPassword: ermsg,
          username: '',
          password: '',
        })
      } else if (ermsg.includes('username')) {
        this.setState({
          errormsg: true,
          responseErrormsgUsername: ermsg,
          username: '',
          password: '',
        })
      } else if (ermsg.includes('password')) {
        this.setState({
          errormsg: true,
          responseErrormsgPassword: ermsg,
          username: '',
          password: '',
        })
      }
    }
  }

  onPassWord = event => {
    this.setState({password: event.target.value})
  }

  passWord = () => {
    const {password} = this.state
    return (
      <div className="inputEl-container">
        <label htmlFor="passwordLabel">PASSWORD</label>
        <input
          id="passwordLabel"
          type="password"
          placeholder="Password"
          value={password}
          onChange={this.onPassWord}
        />
      </div>
    )
  }

  onUserName = event => {
    this.setState({username: event.target.value})
  }

  userName = () => {
    const {username} = this.state
    return (
      <div className="inputEl-container">
        <label htmlFor="usernameLable">USERNAME</label>
        <input
          id="usernameLable"
          type="text"
          placeholder="Username"
          value={username}
          onChange={this.onUserName}
          //
        />
      </div>
    )
  }

  loginForm = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-img"
      />
      <div>{this.userName()}</div>
      <div>{this.passWord()}</div>
    </div>
  )

  render() {
    const {
      errormsg,
      responseErrormsgUsername,
      responseErrormsgPassword,
      responseErrormsgUsernameAndPassword,
    } = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-img"
        />
        <form onSubmit={this.submitLogin}>
          {/* {this.loginForm()} */}
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="logo-img"
          />
          <div>{this.userName()}</div>
          <p>{errormsg ? `${responseErrormsgUsername}` : ''}</p>
          <div>{this.passWord()}</div>
          <p>{errormsg ? `${responseErrormsgPassword}` : ''}</p>

          <button type="submit" className="login-button">
            Login
          </button>
          <p>{errormsg ? `*${responseErrormsgUsernameAndPassword}` : ''}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
