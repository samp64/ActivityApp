import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";
import { func, string, arrayOf, number, oneOfType } from "prop-types";
import "./Select.css";

const clickOutsideConfig = {
  handleClickOutside: () => Select.handleClickOutside
};

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  handleClickOutside = evt => {
    Select.handleClickOutside = () => this.setState({ isOpen: false });
  };


  render () {
    const { label, onClick, options, value, placeholder } = this.props;
    const { isOpen } = this.state;
    return (
      <div className="selectWrapper">
        {<label className="selectLabel">{label}</label>}
    
          <div className="select" onClick={() => this.setState({isOpen: true})} >
              <div className="placeholder">{value || placeholder}</div>
            {
              isOpen && 
              <div className="options">
                {options.map(option => 
                  <div value={option} id="option" key={option} onMouseDown={() => onClick(option)}>
                    <span onClick={onClick}>{option}</span>
                  </div> 
                )}
              </div>
            }
          </div>
        </div>
    )
  }
}

Select.propTypes = {
  onClick: func.isRequired,
  label: string,
  value: oneOfType(
    [string, number]
  ),
  options: arrayOf(
    oneOfType( 
      [string, number]
    )
  ),
  placeholder: string,
};

export default onClickOutside(Select);




// const Select = ({ label, onClick, options, value, placeholder }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggle = () => setIsOpen(!isOpen);
//   Select.handleClickOutside = () => setIsOpen(false);
//   return (
//     <div className="selectWrapper">
//       {<label className="selectLabel">{label}</label>}

//       <div className="select" onClick={toggle} >
//         <div className="placeholder">{value || placeholder}</div>
//         {
//           isOpen && 
//           <div className="options">
//             {options.map(option => 
//               <div value={option} id="option" key={option} onMouseDown={() => onClick(option)}>
//                 <span onClick={onClick}>{option}</span>
//               </div> 
//             )}
//           </div>
//         }
//       </div>
//     </div>
//   );
// };
