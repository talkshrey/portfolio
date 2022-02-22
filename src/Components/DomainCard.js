import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function DomainCard(props) {
  return (
    <div>
      <Flippy
        flipOnHover={false}
        flipOnClick={true}
        flipDirection="horizontal"
        style={{ width: "90%", paddingLeft: "5%" }}
      >
        <FrontSide style={{ borderRadius: "9px" }}>
          <img src={props.img} alt="shrey" width="40%" /> <br />
          <span> {props.name} </span>
        </FrontSide>
        <BackSide style={{borderRadius: "9px", textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center'}}>
          {props.desc}
        </BackSide>
      </Flippy>
    </div>
  );
}
