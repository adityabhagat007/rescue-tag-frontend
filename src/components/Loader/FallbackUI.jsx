import { CircularProgress, Container, Typography, styled ,Backdrop } from "@mui/material";


const StyledContainer = styled(Container)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column",
  });
  
  const StyledCircularProgress = styled(CircularProgress)({
    color: "#2196F3",
    transition: "opacity 0.3s ease-in-out",
  });
  
  const StyledBackdrop = styled(Backdrop)({
    zIndex: 1,
    color: "#fff", 
    opacity: 1,
    transition: "opacity 0.3s ease-in-out",
  });
  
  const FallbackUI = () =>{
    return (<StyledContainer>
      <StyledBackdrop open={true}>
        <StyledCircularProgress size={60} thickness={4} />
      </StyledBackdrop>
      <Typography variant="h6" style={{ marginTop: 16 }}>
        Loading...
      </Typography>
    </StyledContainer>)
  }
  export default FallbackUI
  