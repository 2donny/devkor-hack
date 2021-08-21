import React, {useState, useEffect} from 'react';
import './Register.css'
import { AiOutlineArrowLeft } from "react-icons/ai";

function Register() {

    const [name, setname] = useState('');
    const [univ, setuniv] = useState('');
    const [age, setage] = useState('');
    const [mbti, setmbti] = useState('');
    const [area, setarea] = useState('');
    const [gender, setgender] = useState('');
    const [text, settext] = useState('');

    const onSubmit= (e) => {
        e.preventDefault();
        console.log(name, univ, age, mbti, area, gender, text);
    }

    return (
        <div className = "body">

            <button className="waitingModalHeader">
            <AiOutlineArrowLeft size="15" color="black" />
            </button>
            
            <div className = "header">

            </div>
            <h1 className = "title">프로필 만들기</h1>
            <div className = "wrapper">

                <form onSubmit = {onSubmit}>
                        <input 
                        className="name"
                        type="text"
                        placeholder="이름을 적어주세요."
                        onChange={e => setname(e.target.value)}
                        required/>
                        <br/>

                        <select 
                        className="univ"
                        name="univ" 
                        // value = {univ}
                        onChange={e => setuniv(e.target.value)}
                        required
                        >
                            <option>학교를 선택해주세요.</option>
                            <option>고려대</option>
                            <option>서울대</option>
                            <option>연세대</option>
                        </select>

                    <div className = "three">
                            <input 
                            type="text"
                            className = "age"
                            // value= {age}
                            placeholder="나이를 입력해주세요"
                            onChange={e => setage(e.target.value)}
                            required/>
                            <br/>
                       
                        <div className = "agetext">부담가지지 마세요~ 나이는 20초 20중 20후 30초 방식으로 표기가 되요!</div>
              
                            <select 
                            className = "mbti"
                            name="mbti" 
                            // value = {mbti}
                            onChange={e => setmbti(e.target.value)}
                            required
                            >
                                <option value="">MBTI를 선택해주세요.</option>
                                <option>ISTJ</option>
                                <option>ISFJ</option>
                                <option>INFJ</option>
                                <option>INTJ</option>
                                <option>ISTP</option>
                                <option>ISFP</option>
                                <option>INFP</option>
                                <option>INTP</option>
                                <option>ESTP</option>
                                <option>ESFP</option>
                                <option>ENFP</option>
                                <option>ENTP</option>
                                <option>ESTJ</option>
                                <option>ESFJ</option>
                                <option>ENFJ</option>
                                <option>ENTJ</option>
                            </select>

                            <select 
                            className = "area"
                            name="area" 
                            // value = {area}
                            onChange={e => setarea(e.target.value)}
                            required
                            >
                                <option value="">지역을 선택해주세요.</option>
                                <option>서울</option>
                                <option>경기 분당 수원권</option>
                                <option>경기 안양 과천 부천권</option>
                                <option>경기 구리 남양주 하남권</option>
                                <option>경기 의정부 파주 고양권</option>
                                <option>인천</option>
                                <option>대전</option>
                                <option>충북</option>
                                <option>충남</option>
                                <option>강원</option>
                                <option>부산</option>
                                <option>경북</option>
                                <option>경남</option>
                                <option>대구</option>
                                <option>울산</option>
                                <option>광주</option>
                                <option>전북</option>
                                <option>전남</option>
                                <option>제주</option>
                            </select>
                        </div>

                    <div className = "gender">
                        <div className = "gendertext">성별을 선택해주세요</div>
                        <div >
                            <span>
                            <input type="radio" name="gender" value="man" onChange={e => setgender("man")} required>
                            </input>
                            남
                            <input type="radio" name="gender" value="woman" onChange={e => setgender("woman")}>
                            </input>
                            여
                            </span>
                        </div>
                    </div>

                    <div className = "texttext">개성있는 자기소개!</div>
                    <textarea 
                            className = "text"
                            // value= {age}
                            placeholder="tip. 어떤 친구와 대화하고 싶은지 적어두면 더 좋아요! &#10;예시) 미대에 다니는 다양한 삶을 살고싶어하는 미개봉화석^^&#10;요즘 스타트업에 관심이 생겨서 관련하신 분들과 이야기하면 좋을 것 같아용 ㅎㅎ"
                            onChange={e => settext(e.target.value)}
                            required/>
                            <br/>

                    <button className = "btn" type= "submit">확인</button>
                </form>
            </div>
        </div>     
    );

}

export default Register