import { Profile } from "../logo"

const DisplayPicture = ({onClick}) => {
  return (
        <img src={Profile} onClick={onClick} alt='...'/>
  )
}
export default DisplayPicture