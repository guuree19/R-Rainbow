import react from 'react'
// import ColorBlock from './ColorBlock'

function ColorBlock(props){
    return(
        <div className="colorBlock"
            style={{'bakgroundColor': props.color}}>
                <p>{props.color}</p>

        </div>
    )

}
export default ColorBlock