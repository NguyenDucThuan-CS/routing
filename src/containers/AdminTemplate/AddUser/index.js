import React, {useState} from 'react'
import { actAddUser } from './modules/actions';
import { connect } from 'react-redux';
import Loader from '../../component/Loader';

function AddUser(props) {
    const [state, setState] = useState({
            "taiKhoan": "",
            "matKhau": "",
            "email": "",
            "soDt": "",
            "maNhom": "GP01",
            "hoTen": "string"
    })
     
    const handleOnchange = (event) => {
        const {name, value} = event.target;
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addUser(state);
    }

    if(props.loading) return <Loader />
    return (
        <form className="container" onSubmit={handleSubmit}>
          <h3>Add user</h3>
          <div className="form-group">
            <span>Tai khoan</span>
            <input
              className="form-control"
              name="taiKhoan" 
              onChange = {handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Mat khau</span>
            <input
              className="form-control"
              name="matKhau"
              onChange = {handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Ho ten</span>
            <input
              className="form-control"
              name="hoTen"
              onChange = {handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Email</span>
            <input
              className="form-control"
              name="email"
              onChange = {handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>SDT</span>
            <input
              className="form-control"
              name="soDt"
              onChange = {handleOnchange}
            />
          </div>
          <div className="form-group">
            <span>Ma nhom</span>
            <input
              className="form-control"
              name="maNhom"
              onChange = {handleOnchange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-success">
              Add user
            </button>
          </div>
        </form>
      );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => {
            dispatch(actAddUser(user));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.addUserReducer.loading,
        data: state.addUserReducer.data,
        error: state.addUserReducer.error,
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddUser);
