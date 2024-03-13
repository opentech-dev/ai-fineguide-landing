(() => {
  const main = () => {
    const HTMLBotWrapper = document.getElementById('bots-wrapper');
    const HTMLChatWrapper = document.getElementById('chat-wrapper');

    const chatbots = [
      {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/f0783ce0-e42c-4a97-a6eb-44b5ae007d0a.jpeg',
        id: '2e6aa58c-683a-42c7-83fc-30ade0d8a67c',
        name: 'Willy the Shaky',
        details: `
          Speaks old English, a distinguished gentleman indeed!
        `
      },
      {
        imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/a0788d4f-6e08-4f06-8de5-9aced6193cd5.jpeg',
        id: '48ec5509-b301-4bcb-9263-415e7bf5adec',
        name: 'Yoda',
        details: `
        Speaks Yodaish, knows how to use the Fineguide Force
      `
      },
      {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/213005ba-c43c-4f78-8bc6-3f0874aa745c.jpeg',
      id: '2e90d7ea-0e1f-4e78-8d87-786bbedfb8bb',
      name: 'Jack, The Scotsman',
      details: `
      Speaks with a distinctive Scottish accent, exuding a touch of authentic Scots charm.
    `
    }, {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/eddy.jpeg',
      id: '2d940077-6a7a-4227-93a6-6e3345caa8d8',
      name: 'Eddy A. Poe',
      details: `
      In the shadowy realm of textual discourse, thy chatbot doth converse, a spectral warden of words
    `
    }, {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/_731867c0-417f-496c-9f33-0f32c7dc361d.jpeg',
      id: '0f4aa93b-c607-4281-a018-bb2930c61522',
      name: 'Ice-Vanila',
      details: `
      Yo! let's kick it! 
    `
    }, {
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/d3eddc9c-886a-4d1f-b8d2-f92dd1404132.jpeg',
      id: 'ea64ae71-462a-4e1c-93b5-dcbe1b78ab44',
      name: 'Pirate Wilds',
      details: `
        Yarr matey! Your chatbot be chattin' in true pirate fashion, with a seafaring tongue and a touch of swashbucklin' flair. Arr!
    `
    },{
      imgUrl: 'https://s3.us-east-2.amazonaws.com/com.publicfiles.aibot/faff609f-d783-4ff0-a068-807fac667a9c/avatars/0ec3bcee-a66b-4872-810c-1ad6c663c834.jpeg',
      id: 'ad0a130b-24b2-4199-bcdf-35d8d7ced770',
      name: 'Wilford',
      details: `
      Your chatbot talks like a true cowboy, drawlin' with a Western twang, as if it just rode in from the frontier. Yeehaw!
    `
    }];

    const iframeTemplate = (id) => `<iframe class="js-chatbot-frame" allow-same-origin src="https://fg-client.optdevtech.com/${id}"></iframe>`;

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