# Notiflow Landing

## API

**Request**

```
POST

{
  "package": "com.kakao.talk",
  "name": "사용자",
  "title": "채팅방이름이름",
  "message": ""
}
```

Column    | Type            | Description
----------|-----------------|--------------------
`package` | `string`        | 앱 패키지 이름, 현재는 카카오톡만 사용가능합니다.
`name`    | `string`        | 메시지를 보낸 사용자 이름
`title`   | `string`, `null` | 채팅방 제목, 개인톡인 경우 `null`, 단톡방 및 오픈톡은 채팅방 제목이 그대로 들어옵니다.
`message` | `string`        | 메시지 본문

**Response**

메시지를 받고, 답변을 보내고 싶을 때는 다음과 같이 정의할 수 있습니다.

```
{
  "reply": "답변답변"
}
```


Column    | Type            | Description
----------|-----------------|--------------------
`reply`   | `string`, `null` | 받은 텍스트 메시지에 대해 답장하고 싶은 경우 이 칼럼을 활용합니다.

