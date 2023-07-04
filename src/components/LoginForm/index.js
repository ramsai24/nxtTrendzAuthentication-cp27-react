// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errormsg: false}

  submitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    //  'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      const {history} = this.props
      history.push('/')
    } else {
      this.setState({errormsg: true})
    }
  }

  onPassWord = event => {
    console.log(event.target.value)
    this.setState({password: event.target.value})
  }

  psWord = () => {
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

    // const {password} = this.state
    // return (
    //   <>
    //     <label className="input-label" htmlFor="password">
    //       PASSWORD
    //     </label>
    //     <input
    //       type="password"
    //       id="password"
    //       className="password-input-filed"
    //       value={password}
    //       onChange={this.onChangePassword}
    //     />
    //   </>
    // )
  }

  onUsername = event => {
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
          onChange={this.onUsername}
          //
        />
      </div>
    )

    // const {username} = this.state
    // return (
    //   <>
    //     <label className="input-label" htmlFor="username">
    //       USERNAME
    //     </label>
    //     <input
    //       type="text"
    //       id="username"
    //       className="username-input-filed"
    //       value={username}
    //       onChange={this.onChangeUsername}
    //     />
    //   </>
    // )
  }

  loginForm = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-img"
      />
      <div>{this.userName()}</div>
      <div>{this.psWord()}</div>
    </div>
  )

  render() {
    const {errormsg} = this.state
    console.log(this.state)
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
          <div>{this.psWord()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p>{errormsg ? "*Usernamae and password didn't match" : ''}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
