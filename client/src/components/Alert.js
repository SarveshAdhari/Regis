import { useAppContext } from '../context/appContext'

import './Alert.css'

const Alert = ({type}) => {
    const {alertType, alertText} = useAppContext()
  return (
    <div className={`alert ${alertType}`}>
        {alertText}
    </div>
  )
}
export default Alert