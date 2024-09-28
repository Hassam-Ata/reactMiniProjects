import React ,{Component}from 'react'
import { ThemeContext } from "../contexts/ThemeContext";

class  ThemeToggle extends Component {
    static contextType = ThemeContext;
    state = {  } 
    render() { 
        return (
            <div>
                <button onClick={this.context.toggleTheme}>Toggle Theme</button>
            </div>
        );
    }
}
 
export default ThemeToggle;