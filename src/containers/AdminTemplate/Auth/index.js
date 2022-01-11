import React, {useState} from 'react'
import { actAuthLogin } from './modules/actions';
import { connect } from 'react-redux';
import Loader from '../../component/Loader';


 function AuthPage(props) {
    const [state,setState] = useState({
        taiKhoan:"",
        matKhau:"",
    })

    const handleOnchange = (event) => {
        const {name,value} = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(state,props.history)
    }
    
    const renderNoti = () => {
      if(props.error && props.error.response) {
        return  <div className='alert alert-danger'>{props.error.response.data}</div>
      }
    }
    if(props.loading) return <Loader />
    
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <h3>AuthPage</h3>
            {renderNoti()}
            <form onSubmit = {handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange = {handleOnchange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  name="matKhau"
                  onChange = {handleOnchange}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
      login: (user,history) => {
        dispatch(actAuthLogin(user,history));
      }
    }
}

const mapStateToProps = (state) => {
  return {
    data: state.authReducer.data,
    error: state.authReducer.error,
    loading: state.authReducer.loading,
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (AuthPage);