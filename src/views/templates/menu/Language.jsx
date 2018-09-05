import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import { reactLocalStorage } from 'reactjs-localstorage'

class Language extends React.Component {
    constructor(props) {
        super(props);

        var language = reactLocalStorage.get("language");
        language = (language==undefined || language == "vi") ? "Vietnam" : "English";

        this.state = {
            lang: {
                img: language =="Vietnam"?"assets/images/vn.png":"assets/images/en.png",
                value: language,
            }
        }
        this.select = this.select.bind(this);
    }

    select = (e) => {
        var { lang } = this.state;
        var value = e.target.innerText;

        if (value === "Vietnam") {
            lang.img = "assets/images/vn.png"
            lang.value = value
        } else {
            lang.img = "assets/images/en.png"
            lang.value = value
        }
        this.setState({
            lang: lang
        });
        var language = value === "Vietnam" ? "vi" : "en";
        var isLogged = reactLocalStorage.get("user.token") ? true: false;
        if (isLogged)
            reactLocalStorage.set("user.language", language);
            
        reactLocalStorage.set("language", language);
        this.props.i18n.changeLanguage(language);
    }

    render() {  
        
        var { lang } = this.state;
        return (
            <div>
                <button type="button" className="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src={lang.img} alt="" />
                </button>
                <div className="dropdown-menu" onClick={this.select}>
                    {lang.value === "Vietnam" ? <div className="dropdown-item"><img src="assets/images/en.png" alt="en"
                        style={{ marginRight: "10px" }} />English
                    </div> : <div className="dropdown-item"><img src="assets/images/vn.png" alt="vn"
                            style={{ marginRight: "10px" }} />Vietnam</div>}
                </div>
            </div>
        );
    }
}

export default translate('common')(Language);