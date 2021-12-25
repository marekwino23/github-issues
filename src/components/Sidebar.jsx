const Sidebar = ({all,closed,open}) => {
    return(
        <div className="sidebar">
            <div className="bar">
                <div className="circle-red"></div>
                <div className="circle-yellow"></div>
                <div className="circle-green"></div>
            </div>
                <div className="github-retangle">
                <ul>
                    <div className="box-github"><li><i className="fa fa-github"></i>All<span>{all}</span></li></div>
                    <div className="box-info"><li><i className="fa fa-info-circle"></i>Open<span>{open}</span></li></div>
                    <div className="box-closed"><li><i className="fa fa-check-circle"></i>Closed<span>{closed}</span></li></div>
                </ul>
        </div>
        </div>
    )
}
export default Sidebar;