import styled from "styled-components";
import { variables } from "../../styles/variables";

export const HomeCarouselStyle = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 905px;
  margin: auto;
  flex-direction: column;  
  gap: 50px;
  padding: 50px 0px 50px 0px;
  
.slider {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  }

  .image-container{
   display: flex;
   gap: 25px;
  }

 img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.carouselbutton {
  background-color: ${variables.primary};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

button:hover {
  background-color: rgba(255, 255, 255, 1);
}

.pbutton:first-of-type {
  left: 10px;
}

.nbutton:last-of-type {
  right: 10px;
}
 .pagination {
    display: flex;
    justify-content: center;
    position: relative;
     
 button {
      margin: 0 5px;
      background-color: transparent;
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 5px 10px;
      font-size: 16px;  
      border-radius: 16px; 
      cursor: pointer;   

      &.active {
        background-color: ${variables.primary};
      }
    }
  }
`;
