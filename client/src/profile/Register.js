import React, {useState, useEffect} from 'react';

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
        <div className="App">
            <h1>프로필 만들기</h1>

            <form onSubmit = {onSubmit}>
                <div>
                    
                    <input 
                    type="text"
                    placeholder="이름을 적어주세요."
                    onChange={e => setname(e.target.value)}/>
                    <br/>
                    
                </div>

                <div>
                    <select 
                    name="univ" 
                    // value = {univ}
                    onChange={e => setuniv(e.target.value)}
                    >
                        <option value="">학교를 선택해주세요.</option>
                        <option>고려대</option>
                        <option>서울대</option>
                        <option>연세대</option>
                    </select>
                </div>

                <div>
                    <input 
                    type="text"
                    // value= {age}
                    placeholder="나이를 입력해주세요"
                    onChange={e => setage(e.target.value)}/>
                    <br/>
                </div>

                <div>
                    <select 
                    name="mbti" 
                    // value = {mbti}
                    onChange={e => setmbti(e.target.value)}
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
                </div>

                <div>
                    <select 
                    name="area" 
                    // value = {area}
                    onChange={e => setarea(e.target.value)}
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
            
                <div class = "gender">
                    <div class="name">성별을 선택해주세요</div>
                        <div >
                            <span class = "res">
                            <input type="radio" name="gender" value="man" onChange={e => setgender("man")}>
                            </input>
                            남
                            <input type="radio" name="gender" value="woman" onChange={e => setgender("woman")}>
                            </input>
                            여
                            </span>
                        </div>
                    
                </div>

                <button type= "submit">확인</button>
            </form>
        </div>     
    );

}

export default Register