<img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/39fb5984-4471-4438-8217-2ae283a4fd70" witdh=800 height=500>

# <img src="https://rolling-paper-team3.vercel.app/static/media/logo.b0eb23b848f6b7067a8e7055071719d7.svg"> 프로젝트 소개
```javascript
로그인 없이 다른 사람들의 롤링페이퍼에 메시지와 이모티콘을 남길 수 있고, 자기만의 롤링페이퍼를 만들어 다른사람에게 공유할 수 있는 서비스
```
<table>
  <tbody>
    <tr>
      <td>개발 기간</td>
      <td>2024.02.26 ~ 2024.03.08</td>
    </tr>
    <tr>
      <td>URL</td>
      <td>https://rolling-paper-team3.vercel.app/</td>
    </tr>
  </tbody>
</table>

<br />

# <img src="https://rolling-paper-team3.vercel.app/static/media/logo.b0eb23b848f6b7067a8e7055071719d7.svg"> 사용 기술 스택
<table>
  <tbody>
    <tr>
      <tr>
        <td><p>Library</p></td>
        <td><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> </td>
      </tr>
      <tr>
        <td><p>Programming Language</p></td>
        <td><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"></td>
      </tr>
      <tr>
        <td><p>Styling</p></td>
        <td><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></td>
      </tr>
      <tr>
        <td><p>Version Control</p></td>
        <td><img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"></td>
      </tr>
      <tr>
        <td><p>Design</p></td>
        <td><img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"></td>
      </tr>
      <tr>
        <td><p>Communication</p></td>
        <td><img src="https://img.shields.io/badge/Notion-%23800000.svg?style=for-the-badge&logo=notion&logoColor=white"> <img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"></td>
      </tr>          
    </tr>
  </tbody>
</table>

<br />

# <img src="https://rolling-paper-team3.vercel.app/static/media/logo.b0eb23b848f6b7067a8e7055071719d7.svg"> 주요 기능
<table>
  <tbody>
    <tr>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/7c5f1307-581c-4b48-8168-040ba16fb471" width=380 height=380></td>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/bd54c756-70c9-4133-a25f-18bf5340fed7" width=380 height=380></td>
    </tr>
    <tr>
      <td align="center">렌더링 페이지</td>
      <td align="center">롤링 페이퍼 리스트 페이지</td>
    </tr>
    <tr>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/e55de5c8-feea-41d2-9c01-b77c441f3fdd" width=380 height=380></td>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/57cc30e3-040e-44a6-9372-217fbf6309a7" width=380 height=380></td> 
    </tr>
    <tr>
      <td align="center">롤링 페이퍼 만들기</td>
      <td align="center">롤링 페이퍼 메세지 작성</td>
    </tr>
    <tr>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/141fe44c-ccfb-4d96-ba5f-83a707305925" width=380 height=380></td>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/ed035792-cd72-4eb2-8dc2-29995eb89b89" width=380 height=380></td>
    </tr>
    <tr>
      <td align="center">무한 스크롤</td>
      <td align="center">이모지</td>
    </tr>
    <tr>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/1e5fd10d-183c-4fc9-928a-39a8110b32a2" width=380 height=380></td>
      <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/6561d2fe-2c96-4b83-b57d-34d54fee1f9a" width=380 height=380></td> 
    </tr>
    <tr>
      <td align="center">메세지 삭제</td>
      <td align="center">다크 모드</td>
    </tr>
  </tbody>
</table>

<br />

# <img src="https://rolling-paper-team3.vercel.app/static/media/logo.b0eb23b848f6b7067a8e7055071719d7.svg"> 트러블 슈팅
<details>
  <summary>중복 리퀘스트 요청</summary> <br />

  ``
  문제상황
  ``

  롤링 페이퍼 페이지에서 필요한 데이터와 헤더에 필요한 데이터를 각각에서 GET 요청을 리퀘스트 하였더니 한 페이지 접속 시 같은 요청이 두 번 발생되는 상황이 발생하였습니다. 
  이는 서버의 불필요한 리소스를 발생시키고, 데이터 간의 불일치 및 성능 저하 같은 문제를 야기할 수 있는 것을 인식하였습니다. 
  
  ``
  해결방안
  ``
  
  롤링 페이퍼 페이지에 GET 요청을 통해 필요한 데이터를 받아온 후, 헤더에게 prop을 넘겨줄 데이터들을 객체 형태로 저장하여, 이를 헤더에게 넘겨주는 방식을 채택하였습니다. 
  이렇게 함으로써 불필요한 중복 GET 요청을 최소화하여 서버의 부하를 감소시키고, 성능 및 효율성을 개선하였습니다.

  <br />
</details>

<details>
  <summary>이미지 렌더링 최적화</summary> <br />
  
  ``
  문제상황
  ``
  
  롤링 페이퍼 배경 선택 페이지에서 토글 버튼을 통해 컬러와 이미지를 구분하다보니 하나의 컴포넌트로 이미지를 구현하였습니다.
  그러나 background로 이미지를 처리하다보니 초기 렌더링 속도가 느리다는 문제를 인식하였습니다.
  
  ``
  해결방안
  ``
  
  하나의 컴포넌트로 배경을 선택하기때문에 생긴 문제라고 생각하여 컬러배경과 이미지배경의 컴포넌트를 분리하였고 이미지배경 컴포넌트는 <img> 태그를 사용하여 렌더링 속도를 높엿습니다.

  <br />  
</details>

<details>
  <summary>react-quill 사용 시 html 형식이 그대로 Srting 값으로 출력</summary> <br />
  
  ``
  문제상황
  ``
  
  react-quill 라이브러리를 사용하여 롤링 페이퍼 메세지를 만들어서 전달하는 과정에서  만들었습니다. 
  이 때 작성한 내용을 보여줄 때 html 형식이 그대로 Srting 값으로 출력이 되는 문제점이 발생했습니다.
  
  ``
  해결방안
  ``
  
  dangerouslySetInnerHTML을 이용해 string을 html로 파싱해서 DOM에 추가하는 방식으로 해결하였습니다. 

  <br />
</details>

<details>
  <summary>react/require-default-props 문제 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  토글값을 page에 state로 넣고 토글에 해당하는 컴포넌트에 값을 props로 넘겨줄 때 토글값이 필수가 아니라는 에러가 발생했습니다.
  즉, toggelValue가 토글컴포넌트에 필수적으로 필요한 요소가 아닙니다.
  
  ``
  해결방안
  ``
  
  필수적인 요소가 아닌경우에는 디폴트값을 넣어주면 됩니다.

  ```javascripte
  Toggle.propTypes = {
    onToggle: PropTypes.func.isRequired,
    toggleValue: PropTypes.string,
  };
  Toggle.defaultProps = {
    toggleValue: '',
  };
  ```

  <br />
</details>

<details>
  <summary>전체 화면 배경 색 변경 시 높이 설정 문제</summary> <br />
  
  ``
  문제상황
  ``
  
  뷰포트의 전체 화면에 배경색을 지정하기 위해서 다음과 같은 코드 작성하였습니다.

  ```javascript
  const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
    background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
  `;
  ```

  하지만 모바일 화면에서 scroll 발생 시에 over된 부분에는 색상이 적용되지 않는 문제가 발생하였습니다.
  
  <img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/0892f878-82fd-4b02-ab47-eacbce900ceb"> <br />

  **높이 설정 문제**
  : height: 100vh를 사용하면 화면 높이에 딱 맞는 높이를 가지게 됩니다.
    만약 content의 높이가 뷰포트 높이보다 높아져 스크롤이 생기게 되면, 해당 부분에는 background-color가 적용되지 않습니다.
  
  ``
  해결방안
  ``
  
  `overflow: auto` 를 사용함으로써 부모 요소가 뷰포트의 높이를 벗어나더라도 벗어난 부분까지 스타일 적용이 가능해집니다.

  ```javascript
  const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0px;
  	overflow: auto;
    background-color: ${({ bgColor = 'var(--orange200)' }) => bgColor};
  `;
  ```

  <br />
</details>

<details>
  <summary>'PropName' is missing in props validation 에러 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  부모 컴포넌트에서 보낸 이의 이름을 prop으로 넘겨 받으려 하는데 오류가 발생하였습니다.

  <img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/bdd8d109-4602-47c4-bc1f-10bdfc3b7b8d">

  ```javascript
  function RollingCard({ name = 'user' }) {
    return (
      <Container>
        <SenderFrame>
          <ProfileImage>
            <img src={profileImage} alt={profileImage} />
          </ProfileImage>
          <SenderInfo>
            <span>From.</span>
            <em>{name}</em>
          </SenderInfo>
        </SenderFrame>
      </Container>
    );
  }
  ```
  
  ``
  해결방안
  ``
  
  1. prop-type 패키지 설치

  ```jsx
    npm i prop-type --save
  ```

  2. prop-types 모듈을 import 해준 후에 PropTypes를 지정해주어야합니다.

  ```jsx
  RollingCard.propTypes = {
    name: PropTypes.string.isRequired,
  };
  ```

  + 추가적으로 .eslint파일에서 'react/prop-types': ['off'],  을 통해 props 유효성 검사를 off 하여 해결이 가능합니다.

  <br />
</details>

<details>
  <summary>A form label must be associated with a control 에러 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  이 오류는 **`<label>`** 요소와 **`<input>`** 요소가 적절하게 연결되지 않았을 때 발생했으며
  
  다음과 같이 **`htmlFor`** 속성과 **`id`** 속성을 사용하여 올바르게 연결했습니다.

  ```javascript
  <InputContent>
    <label htmlFor="InputFrom" />
    <input id="InputFrom" />
  </InputContent>
  ```

  label과 input을 연결해 줬음에도 다음과 같은 에러가 발생했습니다.

  <img width="691" alt="스크린샷 2024-02-26 오후 3 16 17" src="https://github.com/MinCheolS/RollingPaper/assets/97032929/a02815aa-fc3e-4829-8c62-61de1ed9cd67">

  `"A form label must be associated with a text label"` 오류는 웹 접근성을 위반한 경우 발생하는 오류였습니다.
  
  
  
  ``
  해결방안
  ``
  
  Airbnb 스타일 가이드 경우, **`eslint-plugin-jsx-a11y`** 플러그인을 사용하여 웹 접근성 규칙을 적용합니다.  그 중에 하나가 **`"jsx-a11y/label-has-associated-control"`** 규칙입니다. 

  이 규칙은 **`<label>`** 과 연결된 제어 요소를 확인하고, 이에 대한 적절한 연결을 요구합니다.

  ```jsx
   "rules": {
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "labelAttributes": ["htmlFor"],
      }
    ]
  }
  ```

  ```jsx
  "rules": {
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        "labelAttributes": ["htmlFor"]
      }
    ]
  }
  ```

  1. **에러 설정**:
      - ESLint에서는 **`"2"`** 가 **`"error"`** 를 나타냅니다. 두 코드는 동일한 오류를 나타내며, **`"error"`** 를 명시함으로써 명확하게 에러임을 나타냅니다.
        
  3. **규칙 적용**:
      - **`"jsx-a11y/label-has-associated-control"`** 규칙을 설정합니다.
          - 이 규칙은 라벨과 연결된 제어 요소를 확인하고 올바른 연결을 요구합니다.
            
  4. **규칙 옵션 설정**:
      - **`"labelAttributes": ["htmlFor"]`** 로 설정합니다.
          - 이 설정은 라벨과 제어 요소 간의 연결을 확인할 때 고려해야 하는 속성을 지정합니다.
          - **`htmlFor`** 속성만을 고려하도록 설정합니다.

  <br />
</details>

<details>
  <summary>Delete ␍  prettier/prettier 에러 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  프로젝트 환경 setting 중에 코드 끝마다 에러 발생했습니다.

  <img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/3e0e6ae1-3606-4f33-983f-fab3dd9a0e9e">

  endOfLine에서 설정한 CRLF에 문제 = 즉, 각각 새로운 줄 바꿈을 바꾸는 방식에 대한 설정값이 CRLF로 되어있음이 문제였습니다.
  
  - LF(Line Feed(\n)) : 현재 커서의 위치에서 한 줄을 커서의 위치 변화 없이 아래로 내리는 방식입나다.
  
  - CR:Carriage Return(\r): 현재 줄에서 커서의 위치를 맨 앞으로 옮기는 방식입니다.
  
  ``
  해결방안
  ``
  
  맥북의 경우 LF, 윈도우는 CRLF가 기본 설정 값이다. 환경 세팅이 맥북에서 이루어졌기 때문에 LF로 변경하여주니 해결 되었습니다.
  
  <img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/5d309bcf-ff77-405b-bc66-c255558952e7">
  
  추가적으로, 이런 에러를 방지/해결하기 위해서는 .eslint 파일에서 endOfline 에 내용을 추가하거나 변경하면 됩니다.

  <br />
</details>

<details>
  <summary>Warning: Received false for a non-boolean attribute “prop 값” 에러 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  부모 컴포넌트로부터 visible 값을 prop으로 받아와 자식 요소가 존재 유무를 제어하려고 했습니다.

  ```jsx
  function DetailCard({ visible, onClick = null }) {
    return <BackgroundDiv visible={visible} onClick={() => onClick()} />;
  }
  
  DetailCard.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  const BackgroundDiv = styled.div`
    background: rgba(0, 0, 0, 0.6);
    visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
    width: 100%;
    height: 100%;
    position: absolute;
  `
  ```
  
  하지만 다음과 같은 오류 발생
  
  <img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/8380f1d0-63c5-40e6-8a1a-1272783ed449">

  Styled Components의 컴포넌트에게 props로 전달되기를 희망했던 값이 리액트나 HTML의 Attributes로 DOM을 조작하기를 희망하는 것으로 이해하여 이러한 에러가 발생합니다.
  
  = visible이라는 속성을 부여했을 때, styledComponenet의 prop으로 주는 것인지 html 속성으로 주는 것인지 모르기 때문에 발생했습니다.
  
  ``
  해결방안
  ``
  
  사용할 속성명 앞에 $ 기호를 붙여 transient prop으로 명시한 후에 DOM 요소로 전달되지 않게 하면 됩니다.

  ```jsx
  import React from 'react';
  import { styled } from 'styled-components';
  import PropTypes from 'prop-types';
  
  function DetailCard({ $visible, onClick = null }) {
    return <BackgroundDiv $visible={$visible} onClick={() => onClick()} />;
  }
  
  DetailCard.propTypes = {
    $visible: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  const BackgroundDiv = styled.div`
    background: rgba(0, 0, 0, 0.6);
    visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
    width: 100%;
    height: 100%;
    position: absolute;
  `;
  
  export default DetailCard;
  ```

  <br />
</details>

<details>
  <summary>Prop type "array" is forbidden 에러 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  부모 컴포넌트에서 배열 타입의 props를 받아야 하는데 오류가 발생했습니다.

  <img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/ec18fe0c-7f0e-4b52-8873-46132c80422b">

  ```jsx
  CardData.propTypes = {
    cardData: PropTypes.array.isRequired,
  };
  ```
  
  airbnb eslint에서는 PropsType을  array나 object로하면 더 구체적으로 작성하라고 에러가 납니다.
  
  이유는 ? 
  
  1. array of objects [{name:'ABC'},{name:'XYZ'}]
  2. array of strings ['Lorem','Ipsum']
  3. array of integers [2,4,66,4]
  4. array of nested arrays [['d'],[[{name:'a'},{name:'b'}]]]
  5. array of functions [foo,bar]
  
  어떤 타입으로 구성되어 있는지 확인 어렵기 때문입니다.
  
  그래서 `arrayOf( )`나 `objectOf( )`로 안에 구체적으로 타입을 작성해줘야 합니다.
  
  but 한 가지 타입만 작성할 수 있습니다.
  
  ``
  해결방안
  ``
  
  1.내가 받아올 props가 배열 → 객체 → 문자,숫자로 구성되어 있어서 `arrayOf()` 로 할려면 `shape()`로 받아올 객체 데이터 타입을 다 입력해줍니다.

  ```jsx
  CardData.propTypes = {
    cardData: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        backgroundColor: PropTypes.string.isRequired,
        backgroundImageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        messageCount: PropTypes.number.isRequired
      })
    )
  }
  ```
  
  2.`instanceOf()`를 사용하는 것입니다.
  
  ```jsx
  CardData.propTypes = {
    cardData: PropTypes.instanceOf(Array).isRequired,
  };
  ```

  <br />
</details>

<details>
  <summary>이미지와 컬러 구분</summary> <br />
  
  ``
  문제상황
  ``
  
  페이지에서 컬러와 이미지를 각각의 배열로 만들어 props로 내려주었으나 토글 값이 color 일 때 적용이 되지 않는 현상이 발생했습니다.
  
  하나의 props를 사용하고 있어 최종적으로 받는 컴포넌트에서는 현재 값이 컬러인지 이미지 url 인지 구분할 수 없었습니다.
  
  ``
  해결방안
  ``
  
  자바스크립트의 기본 기능 중 하나인 startsWith() 메서드를 활용하였습니다.
  
  이 안의 내용이 있다면 true, 없다면 false를 반환하기 때문에, 이후 삼항연산자로 처리를 하였습니다.
  
  ```jsx
    background: ${({ img }) =>
      img.startsWith('http')
        ? `url(${img}) center / cover no-repeat, rgba(255, 255, 255, 0.3)`
        : `${img}`};
  ```

  <br />
</details>

<details>
  <summary>Prop type "object" is forbidden / Failed prop type: Invalid prop quillValue of type object supplied to TextEditor, expected string. 에러 발생</summary> <br />
  
  ``
  문제상황
  ``
  
  프로젝트에서 react-quill 라이브러리를 통해서 작성한 값을 Props 전달하는 과정에서 발생한 오류가 발생했습니다.

  1.

  <img width="1054" alt="스크린샷 2024-02-28 오후 4 12 59" src="https://github.com/MinCheolS/RollingPaper/assets/97032929/b5508e62-c9f9-47e9-883d-0ae6e5b1ff9e">

  **`react-quill`** 라이브러리를 통해서 작성한 값의 상태를 보면 **`object`** 로 나옵니다.
  
  그래서 **`quillValue`** 라는 값에 **`PropTypes.object.isRequired`** 지정했더니 위의 오류가 발생했습니다.
  
  ```jsx
  TextEditor.propTypes = {
    quillValue: PropTypes.object.isRequired,
    setQuillValue: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  ```
  
  2.
  
  <img width="888" alt="스크린샷 2024-02-28 오후 4 11 58" src="https://github.com/MinCheolS/RollingPaper/assets/97032929/69ef43bd-1d84-4427-8818-6f636a39677d">

  **`quillValue`** 작성하기 전의 값 상태를 보면 **`string`** 으로 나옵니다. 
  
  그래서 **`quillValue`** 라는 값에 **`PropTypes.string.isRequired`** 지정하고,
  
  글을 작성했더니 **`Type`** 이 **`object`** 로 수정을 해야한다고 합니다.
  
  ```jsx
  TextEditor.propTypes = {
    quillValue: PropTypes.string.isRequired,
    setQuillValue: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  
  ```
  
  - 즉, **`quillValue`** 값을 입력하기 전에는 초기값으로 **`string type`** 을 가지고 있다가,

    글을 입력하게 되면 **`object type`** 으로 변하는 문제로 인해 위의 오류가 발생했던 것입니다.
  
  ``
  해결방안
  ``
  
  **`oneOfType`** 을 사용해서 해결했습니다.

  **`oneOfType`** 은 배열에 포함된 타입 중에서 하나를 만족하면 유효한 것으로 간주됩니다.
  
  ```jsx
  TextEditor.propTypes = {
    quillValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
      .isRequired,
    setQuillValue: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  ```

  <br />
</details>

<details>
  <summary>이미지 초기 선택 에러</summary> <br />
  
  ``
  문제상황
  ``
  
  초기 렌더링 시 color 값 중 맨 처음이 check 되어있는 상태로 렌더링 되어야 하는데 초기값을 전달해주었음에도 check되었다는 이미지가 나타나지 않았으며.
  
  리스트에서 이미지를 검사하는 부분의 초기값이 제대로 전달되지 않았습니다.

  ```jsx
    const [userSelectedColor, setUserSelectedColor] = useState('beige');
  ```
  
  ``
  해결방안
  ``
  
  초기값을 설정해주었습니다.

  ```jsx
  const [userSelectedColor, setUserSelectedColor] = useState(selectedColor);
  
  BgList.defaultProps = {
    images: [],
    onSelectColor: () => {},
    onSelectImg: () => {},
    selectedColor: 'beige',
  };
  ```

  <br />
</details>


<br />

# <img src="https://rolling-paper-team3.vercel.app/static/media/logo.b0eb23b848f6b7067a8e7055071719d7.svg"> 프론트엔드 팀원 소개
<table>
  <tbody>
    <tr>
      <tr>
        <th colspan="2">이름</th>
        <th width="250">담당</th>
        <th width="330">Github</th>
      </tr>
      <tr>
        <td align="center"><p>🚩<br />신민철</p></td>
        <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/6a7e4981-ab23-4659-b0d9-b8548d40ea4f" width=100 height=141> </td>
        <td align="center">
          롤링 페이퍼 메세지 페이지 <br />
          카카오톡 공유하기
        </td>
        <td>https://github.com/MinCheolS</td>
      </tr>
      <tr>
        <td align="center"><p>김민정</p></td>
        <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/e70385ad-56b3-497a-8f0f-8b926a0c7e89" width=100 height=141> </td>
        <td align="center">
          롤링 페이퍼 페이지 <br />
          상세페이지 <br />
          모달 <br />
          링크 공유하기
        </td>
        <td>https://github.com/minjeong9919</td>
      </tr>
      <tr>
        <td align="center"><p>이진우</p></td>
        <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/4356cfb3-1e82-4d73-abe1-5c2fab071865" width=100 height=141> </td>
        <td align="center">
          롤링 페이퍼 생성 페이지 <br />
          스켈레톤 UI
        </td>
        <td>https://github.com/yeeZinu</td>
      </tr>
      <tr>
        <td align="center"><p>황준용</p></td>
        <td><img src="https://github.com/MinCheolS/RollingPaper/assets/97032929/e426f140-a68f-4ac1-86b6-e4546b927428" width=100 height=141> </td>
        <td align="center">
          랜딩 페이지 <br />
          롤링 페이퍼 리스트 페이지 <br />
          Toast <br />
          스켈레톤 UI
        </td>
        <td>https://github.com/hsmurf</td>
      </tr>
    </tr>
  </tbody>
</table>
