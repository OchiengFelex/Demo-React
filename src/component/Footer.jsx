

function Footer() {
    const currenttime = new Date().getFullYear();
  return (
    <div style={{display: "flex" , justifyContent:"center", width:"100%", borderTop: "2px solid black"}}>@Ababu {currenttime}</div>
  )
}

export default Footer