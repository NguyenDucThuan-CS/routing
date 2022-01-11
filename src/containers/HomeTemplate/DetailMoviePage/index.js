import React, { Component } from "react";
import { connect } from "react-redux";
import { actFetchDetailMovie } from "./modules/actions";
import Loader from "../../component/Loader";
class DetailMoviePage extends Component {
  componentDidMount() {
    // console.log(this.props.match.params.id);
    const id = this.props.match.params.id;
    this.props.fetchDetailMovie(id);
  }

  renderTable = () => {
    return this.props.data?.lichChieu?.map((item) => {
      return (
        <tr key = {item.maLichChieu}>
          <td>{item.thongTinRap.tenCumRap}</td>
          <td>{item.thongTinRap.tenRap}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</td>
          <td>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</td>
          <td><a className="btn btn-success">Dat ve</a></td>
        </tr>
      );
    });
  };
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={data && data.hinhAnh} />
            </div>

            <div className="col-md-6">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Ten phim</td>
                    <td>Mo Ta</td>
                  </tr>
                  <tr>
                    <td>{data && data.tenPhim}</td>
                    <td>{data && data.moTa}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <table className="table">
                <thead>
                  <td>Cum rap</td>
                  <td>Ten rap</td>
                  <td>ngay chieu</td>
                  <td>gio chieu</td>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailMovie: (id) => {
      dispatch(actFetchDetailMovie(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    loading: state.detailMovieReducer.loading,
    data: state.detailMovieReducer.data,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMoviePage);
