import React, { useContext, useState} from 'react'
import { useHistory } from 'react-router-dom';

//Context Api 를 사용하기 위해 만든 컨택스트파일

//상태를 전역으로 관리 , 현재는 명함 데이터 관리용도

const BcContext = React.createContext()

export function useBc() {
    return useContext(BcContext)
}

export function BcProvider({ children }) {

    const [bcName] = useState("곽로용")
    const [bcPosition] = useState("선임연구원")
    const [bcDepartment] = useState("컨설팅")
    const [bcCompany] = useState("딕스코리아")
    const [bcCreateDate] = useState("2020-10-27")
    const [bcMobile] = useState("010-5032-6038")
    const [bcPhone] = useState("02-574-4625")
    const [bcEmail] = useState("robert.kwag@deex.co.kr")
    const [bcFax] = useState("02-574-4625")
    const [bcAddr] = useState("서울시 금천구 가산디지털1로 128 STX V-타워 502호 (08507)")

    const bcinformation = {
        bcName : bcName,
        bcPosition : bcPosition,
        bcDepartment : bcDepartment,
        bcCompany : bcCompany,
        bcCreateDate : bcCreateDate,
        bcMobile : bcMobile,
        bcPhone : bcPhone,
        bcEmail : bcEmail,
        bcFax : bcFax,
        bcAddr : bcAddr
    }

    const history = useHistory();

    const handleBack = e => {
        e.preventDefault();
        history.goBack()
      }

    const value = {bcinformation, handleBack}

    return (
        <BcContext.Provider value={value}>
            {children}
        </BcContext.Provider>
        )

}


