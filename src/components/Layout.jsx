
export default function Layout({children}) {

    
  return (
    <div style={{
      display:'flex',
      maxWidth:'300px',
      margin:'50px auto',
      flexDirection:'column'
    }}>
        {children}
    </div>
  )
}
