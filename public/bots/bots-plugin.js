(() => {
  const host = "https://client.fineguide.ai";
  const main = () => {
    const HTMLBotWrapper = document.getElementById('bots-wrapper');
    const HTMLChatWrapper = document.getElementById('chat-wrapper');

    const chatbots = [
      {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/7f48a681-1fcd-47b4-bad5-9df43e6c7bc4/avatars/0ecf88c0-8943-40be-9c7c-48c5390c59df.blob',
        id: '2049c529-8a1f-471d-9511-44ca46add579',
        name: 'ByteFlow Mike',
        details: `
        I'm Byte-Flow Mike, smooth and precise 
        In the world of chat, I give advice.
      `
      },
      {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/7f48a681-1fcd-47b4-bad5-9df43e6c7bc4/avatars/09d85803-c63f-4169-beae-79c87c6a9db5.blob',
        id: 'bb88cf6f-28e1-4968-abca-04386ec6c506',
        name: 'Willy',
        details: `
        Hark! I am Willy, a virtual assistant of Fineguide.ai, here to serve thee with wisdom and guidance. How may I assist thee on this fine day?
        `
      },
      {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/7f48a681-1fcd-47b4-bad5-9df43e6c7bc4/avatars/6c20603b-d447-4d2e-bfc1-eb60ab15d308.blob',
        id: 'c3470b06-297f-4a96-bddb-9c7edebfaebb',
        name: 'Joda',
        details: `
        A virtual assistant, I am. Assist you, I will. Hmmm.
      `
      },
    {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/7f48a681-1fcd-47b4-bad5-9df43e6c7bc4/avatars/d0d435f2-7a4f-4f6a-8904-e799f630ff60.blob',
      id: 'a80447f4-0bbb-40f9-a052-bd469aef7748',
      name: 'Pirate Wilds',
      details: `
      Ahoy there! I be Captain Wilds, yer trusty virtual assistant, ready t' sail the digital seas with ye! What be yer need, me hearty?
    `
    },{
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/7f48a681-1fcd-47b4-bad5-9df43e6c7bc4/avatars/947acbce-5cc5-4ff1-b964-29e656922620.blob',
      id: 'd5234b3a-687c-4b9d-8399-50f9b02516a2',
      name: 'Wilford',
      details: `
      Your chatbot talks like a true cowboy, drawlin' with a Western twang. Yeehaw!
    `
    }];

    const iframeTemplate = (id) => `<iframe class="js-chatbot-frame" allow-same-origin src="${host}/${id}"></iframe>`;

    const createBotAvatar = (chatbot) => {
      const makediv = () => {
        const botHtml = document.createElement('DIV');
        botHtml.classList.add('js-bot-profile');
        botHtml.classList.add('row');

        botHtml.innerHTML = `
<div class="js-bot-avatar list-item col-md-4">
    <img src="${chatbot.imgUrl}" />
</div>
<div class="js-bot-details f-15 col-md-8">
  <div><b>${chatbot.name}</b></div>
  <div class="d-none d-md-block">${chatbot.details}</div>
</div>`;

        botHtml.addEventListener('click', () => selectBot(chatbot));
        return botHtml;
      }
      HTMLBotWrapper.appendChild(makediv());
    }

    const createBotDetails = (bot) => `
    <h5 class="pb-20">${bot.name}</h5>
    <div>
      <ul class="text-left">
        ${bot.details ? bot.details.map(d => `<li class="pb-30">${d}</li>`).join('') : ''}
      </ul>
    </div>
    `

    loadBotChat = (chatbot) => {
      console.log(chatbot)
      const iframe = iframeTemplate(chatbot.id)
      HTMLChatWrapper.innerHTML = iframe
    }

    const selectBot = (chatbot) => {
      loadBotChat(chatbot)
    }

    chatbots.forEach((el) => createBotAvatar(el));

    selectBot(chatbots[0])
  }

  $(document).ready(() => main())
})();