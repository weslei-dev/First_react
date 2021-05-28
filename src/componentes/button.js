import "./button.css";


function button({text}){
    return(
        <button className="button-componentes" onClick={click(text)}>{text}</button>
        
    );
    function click(){
        return function(){
            alert("click");

        }        
    }

}
export default button;