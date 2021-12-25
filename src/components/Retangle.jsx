const Retangle = ({color}) => {
    const onClick = (e) => {
            if(color[0] === "gray"){
                color[0] = "black"
                e.target.style.color=color[0]
            }
            else if(color[0] === "black"){
              color[0] = "gray"
              e.target.style.color = color[0]
            }
      }
      return(
        <div className="github-box">
          <div className="github-content">
            <div className="github-elements">
              <p className="date">19.07.2016</p>
          <div className="github-element">
            <div className="github-item"><p>Page changes</p><i onClick={onClick} style={{color:color[0]}} className="fa fa-star"></i></div>
            <div className="github-item"><p>Review of last issues</p><i onClick={onClick} style={{color:color[1]}}  className="fa fa-star"></i></div>
        </div>
          <p className="date">19.07.2016</p>
            <div className="github-element">
              <div className="github-item"><p>Visual UI Update Review</p></div>
              <div className="github-item"><p>Sidebar changes</p></div>
         </div>
          <p className="date">19.07.2016</p>
            <div className="github-element">
             <div className="github-item"><p>Crash update</p></div>
             <div className="github-item"><p>Page viusal UI Update Review</p><i onClick={onClick} style={{color:color[2]}} className="fa fa-star"></i></div>
             <div className="github-item"><p>Sidebar update</p></div>
        </div>
          <p className="date">19.07.2016</p>
            <div className="github-element">
              <div className="github-item"><p>Crash issue</p><i onClick={onClick} style={{color:color[3]}} className="fa fa-star"></i></div>
              <div className="github-item"><p>Visual update & Crash resolve</p><i onClick={onClick} style={{color:color[4]}} className="fa fa-star"></i></div>
        </div>
      </div>
    </div>
  </div>
    )}
    export default Retangle;
