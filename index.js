require('dotenv').config(); // dotenv 모듈 불러오기
const { Client, GatewayIntentBits, REST, Routes, EmbedBuilder,Events, } = require('discord.js');
const { josa } =require('es-hangul');

const client = new Client({ intents: [
    GatewayIntentBits.AutoModerationConfiguration,
    GatewayIntentBits.AutoModerationExecution,
    GatewayIntentBits.DirectMessagePolls,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildExpressions,
    GatewayIntentBits.GuildIntegrations,
    GatewayIntentBits.GuildInvites,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessagePolls,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildWebhooks,
    GatewayIntentBits.MessageContent,
] });
async function findMember(guild, memberId) {
    try {
        const member = await guild.members.fetch(memberId);
        return member;
    } catch (error) {
        console.error('멤버를 찾는 데 오류 발생:', error);
        return null;
    }
}
const commands = [
    {
        name: '인증',
        description: '닉네임을 변경하고 인증요청 메세지를 전송합니다.',
        options: [
            {
                type: 3, // STRING
                name: 'name',
                description: '변경할 닉네임',
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN); // 환경 변수에서 토큰 불러오기

(async () => {
    try {
        console.log('슬래쉬 커맨드를 등록하는 중...');
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID),{ body: commands });
        console.log('슬래쉬 커맨드 등록 완료!');
    } catch (error) {
        console.error(error);
    }
})();

client.on('ready', () => {
    console.log(`로그인 성공: ${client.user.tag}`);
});

client.on(Events.MessageCreate,async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith("!code")){message.reply("https://github.com/kjh9211/zeroone");return}
    if (message.content.startsWith("!fm")){
        const memberId = message.content.slice(4);
        const member = await findMember(message.guild, memberId);
        if (member) {
            if (memberId == 914868227652337695){
                const now = new Date();
            const utcOffset = 9 * 60; // GMT+09:00은 UTC보다 9시간 빠름
            const localTime = new Date(now.getTime() + (utcOffset + now.getTimezoneOffset()) * 60000);
            
            const year = localTime.getFullYear();
            const month = localTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
            const date = localTime.getDate();
            const hours = localTime.getHours();
            const minutes = localTime.getMinutes();
            const seconds = localTime.getSeconds();
            // 역할 목록을 문자열로 변환
            const roles = member.roles.cache.map(role => role.name).join(', ') || '역할 없음';
            const highestRole = member.roles.highest.name || '없음';
    
            // 권한 목록을 문자열로 변환
            const permissions = member.permissions.toArray().join('\n') || '권한 없음';
    
            const isOwner = member.id === message.guild.ownerId ? 'True' : 'False';
    
            // 임베드 생성
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle(`멤버 정보: ${member.user.displayName}`)
                .addFields(
                    { name: '전체 유저 정보', value: "=========================================================", inline: false },
                    { name: '이 유저는 특별 권한이 있습니다!', value: "개발자" , inline: false },
                    { name: 'ID', value: member.id, inline: true },
                    { name: '유저 태그', value: member.user.tag, inline: true },
                    { name: '계정 생성일', value: member.user.createdAt.toDateString(), inline: true },
                    { name: '서버 유저 정보', value: "=========================================================", inline: false },
                    { name: '최상위 역할', value: highestRole, inline: true },
                    { name: '서버 주인 여부', value: isOwner, inline: true },
                    { name: '별명', value: member.nickname || '없음', inline: true },
                    { name: '서버 가입일', value: member.joinedAt.toDateString(), inline: true },
                    { name: '역할', value: roles, inline: false },
                    { name: '권한', value: permissions, inline: false },
                    
                )
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter({ text: `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초 조회` });
                message.channel.send({ embeds: [embed] });
                return
            }
            const now = new Date();
            const utcOffset = 9 * 60; // GMT+09:00은 UTC보다 9시간 빠름
            const localTime = new Date(now.getTime() + (utcOffset + now.getTimezoneOffset()) * 60000);
            
            const year = localTime.getFullYear();
            const month = localTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
            const date = localTime.getDate();
            const hours = localTime.getHours();
            const minutes = localTime.getMinutes();
            const seconds = localTime.getSeconds();
            // 역할 목록을 문자열로 변환
            const roles = member.roles.cache.map(role => role.name).join(', ') || '역할 없음';
            const highestRole = member.roles.highest.name || '없음';
    
            // 권한 목록을 문자열로 변환
            const permissions = member.permissions.toArray().join('\n') || '권한 없음';
    
            const isOwner = member.id === message.guild.ownerId ? 'True' : 'False';
    
            // 임베드 생성
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle(`멤버 정보: ${member.user.displayName}`)
                .addFields(
                    { name: '전체 유저 정보', value: "=========================================================", inline: false },
                    { name: 'ID', value: member.id, inline: true },
                    { name: '유저 태그', value: member.user.tag, inline: true },
                    { name: '계정 생성일', value: member.user.createdAt.toDateString(), inline: true },
                    //{ name: '블랙리스트 등록여부', value: isblack , inline: true },
                    { name: '서버 유저 정보', value: "=========================================================", inline: false },
                    { name: '최상위 역할', value: highestRole, inline: true },
                    { name: '서버 주인 여부', value: isOwner, inline: true },
                    { name: '별명', value: member.nickname || '없음', inline: true },
                    { name: '서버 가입일', value: member.joinedAt.toDateString(), inline: true },
                    { name: '역할', value: roles, inline: false },
                    { name: '권한', value: permissions, inline: false },
                    
                )
                .setThumbnail(member.user.displayAvatarURL())
                .setFooter({ text: `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초 조회` });
    
            message.channel.send({ embeds: [embed] });
        } else {
            message.channel.send('멤버를 찾을 수 없습니다.');
        }
    }
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;

    const { commandName, options } = interaction;

    if (commandName === '인증') {
        const newName = options.getString('name');

        try {
            // 닉네임 변경
            await interaction.member.setNickname(newName);
            const now = new Date();
            const utcOffset = 9 * 60; // GMT+09:00은 UTC보다 9시간 빠름
            const localTime = new Date(now.getTime() + (utcOffset + now.getTimezoneOffset()) * 60000);
            
            const year = localTime.getFullYear();
            const month = localTime.getMonth() + 1; // 월은 0부터 시작하므로 1을 더합니다.
            const date = localTime.getDate();
            const hours = localTime.getHours();
            const minutes = localTime.getMinutes();
            const seconds = localTime.getSeconds();
            // 역할 목록을 문자열로 변환
            const roles = interaction.member.roles.cache.map(role => role.name).join(', ') || '역할 없음';
            const highestRole = interaction.member.roles.highest.name || '없음';
    
            // 권한 목록을 문자열로 변환
            const permissions = interaction.member.permissions.toArray().join('\n') || '권한 없음';
    
            // 임베드 메시지 생성
            const embed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('인증 요청')
                .setDescription(`<@${interaction.member.id}> 님이 ${josa(newName,"으로/로")} 인증을 요청했습니다.`)
                .addFields(
                    { name: '전체 유저 정보', value: "=========================================================", inline: false },
                    { name: 'ID', value: interaction.member.id, inline: true },
                    { name: 'ID', value: interaction.member.user.displayName, inline: true },
                    { name: '유저 태그', value: interaction.member.user.tag, inline: true },
                    { name: '계정 생성일', value: interaction.member.user.createdAt.toDateString(), inline: true },
                    { name: '서버 유저 정보', value: "=========================================================", inline: false },
                    { name: '최상위 역할', value: highestRole, inline: true },
                    { name: '서버 가입일', value: interaction.member.joinedAt.toDateString(), inline: true },
                    { name: '역할', value: roles, inline: false },
                    { name: '권한', value: permissions, inline: false }
                )
                .setFooter({ text: `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초 조회` })
                .setThumbnail(interaction.member.user.displayAvatarURL());

            // 특정 채널에 임베드 전송
            const channel = await client.channels.fetch(process.env.CHANNEL_ID); // 환경 변수에서 채널 ID 불러오기
            if (channel) {
                await channel.send({ embeds: [embed] });
            }

            await interaction.reply({ content: '닉네임이 변경되었습니다!', ephemeral: true });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: '닉네임 변경에 실패했습니다.', ephemeral: true });
        }
    }
});

client.login(process.env.TOKEN); // 환경 변수에서 토큰 불러오기
