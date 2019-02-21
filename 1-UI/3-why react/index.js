
//------------------------------------------
// plain-js
//------------------------------------------

let jsClockRoot = document.getElementById('js-clock-root');

function jsClockUI() {
    let clockUI = `
        <div class="card card-default" style="widhth:100px;height:px">
            <div class="card-body">
                <span class="badge badge-danger">${new Date().toLocaleTimeString()}</span>
            </div>
        </div>
    `
    return clockUI;
}

setInterval(() => {
    jsClockRoot.innerHTML = jsClockUI();
}, 1000);

//------------------------------------------


//------------------------------------------
// react-js
//------------------------------------------

let reactClockRoot = document.getElementById('react-clock-root');

function reactClockUI() {
    return (
        <div className="card card-default" style={{widhth:'100px',height:'100px'}}>
            <div className="card-body">
                <span className="badge badge-primary">{new Date().toLocaleTimeString()}</span>
            </div>
        </div>
    )
}

setInterval(() => {
    ReactDOM.render(reactClockUI(), reactClockRoot);
}, 1000);

//------------------------------------------