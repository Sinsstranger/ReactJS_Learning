import React,{Component} from 'react';

let backgroundStyle ={
     'background-color':'#212529'
 };
export default class ModalWindow extends Component{
    render(){
        return <div id="myModal" className="modal fade" style={backgroundStyle}>
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Форма входа</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div className="modal-body">

                        <form role="form">
                            <fieldset>
                                <hr className="colorgraph"/>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" className="form-control input-lg"
                                               placeholder="Email адрес"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" id="password"
                                               className="form-control input-lg" placeholder="Пароль"/>
                                    </div>
                                    <a href="" className="btn btn-link pull-right">Забыли пароль?</a><br/>
                                    <hr className="colorgraph"/>
                                        <div className="row">
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <input type="submit" className="btn btn-lg btn-success btn-block"
                                                       value="Вход"/>
                                            </div>
                                            <div className="col-xs-6 col-sm-6 col-md-6">
                                                <a href="" className="btn btn-lg btn-primary btn-block">Регистрация</a>
                                            </div>
                                        </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>;
    }
}