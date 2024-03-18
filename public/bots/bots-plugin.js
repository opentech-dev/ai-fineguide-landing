(() => {
  const host = "https://client.fineguide.ai";
  const main = () => {
    const HTMLBotWrapper = document.getElementById('bots-wrapper');
    const HTMLChatWrapper = document.getElementById('chat-wrapper');

    const chatbots = [
      {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/_731867c0-417f-496c-9f33-0f32c7dc361d.jpeg',
        id: '2049c529-8a1f-471d-9511-44ca46add579',
        name: 'ByteFlow Mike',
        details: `
        I'm Byte-Flow Mike, smooth and precise 
        In the world of chat, I give advice.
      `
      },
      {
        imgUrl: 'https://opt.ams3.cdn.digitaloceanspaces.com/fineguide-avatars/13.jpeg',
        id: 'bb88cf6f-28e1-4968-abca-04386ec6c506',
        name: 'Willy',
        details: `
        Hark! I am Willy, a virtual assistant of Fineguide.ai, here to serve thee with wisdom and guidance. How may I assist thee on this fine day?
        `
      },
      {
        imgUrl: 'https://opt.ams3.cdn.digitaloceanspaces.com/fineguide-avatars/14.jpeg',
        id: 'c3470b06-297f-4a96-bddb-9c7edebfaebb',
        name: 'Joda',
        details: `
        A virtual assistant, I am. Assist you, I will. Hmmm.
      `
      },
    {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/d3eddc9c-886a-4d1f-b8d2-f92dd1404132.jpeg',
      id: 'a80447f4-0bbb-40f9-a052-bd469aef7748',
      name: 'Pirate Wilds',
      details: `
      Ahoy there! I be Captain Wilds, yer trusty virtual assistant, ready t' sail the digital seas with ye! What be yer need, me hearty?
    `
    },{
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/0ec3bcee-a66b-4872-810c-1ad6c663c834.jpeg',
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