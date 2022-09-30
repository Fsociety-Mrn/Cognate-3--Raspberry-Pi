import { Alert, Snackbar } from "@mui/material"

export const Notificationnbar = ({opens , setOpens, message, vert, hori, sever}) => {
    // const [open ,setOpen] = useState(opens)
    return (
      <div>
        <Snackbar
        autoHideDuration={6000}
        anchorOrigin={{ vertical: vert, horizontal: hori }}
        open={opens}
        >  
          <Alert 
          variant='standard' 
          severity={sever} 
          sx={{ width: '100%' }} 
          onClose={()=>{
            setOpens(false)
          }}
          >
            {message}
          </Alert>
      </Snackbar>
      </div>
    )
  }