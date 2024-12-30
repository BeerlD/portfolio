
/**
 * 
 * @param { string } username 
 * @returns {Promise<{
 *  "login": "BeerlD",
 *  "id": 107327627,
 *  "node_id": "U_kgDOBmWwiw",
 *  "avatar_url": "https://avatars.githubusercontent.com/u/107327627?v=4",
 *  "gravatar_id": "",
 *  "url": "https://api.github.com/users/BeerlD",
 *  "html_url": "https://github.com/BeerlD",
 *  "followers_url": "https://api.github.com/users/BeerlD/followers",
 *  "following_url": "https://api.github.com/users/BeerlD/following{/other_user}",
 *  "gists_url": "https://api.github.com/users/BeerlD/gists{/gist_id}",
 *  "starred_url": "https://api.github.com/users/BeerlD/starred{/owner}{/repo}",
 *  "subscriptions_url": "https://api.github.com/users/BeerlD/subscriptions",
 *  "organizations_url": "https://api.github.com/users/BeerlD/orgs",
 *  "repos_url": "https://api.github.com/users/BeerlD/repos",
 *  "events_url": "https://api.github.com/users/BeerlD/events{/privacy}",
 *  "received_events_url": "https://api.github.com/users/BeerlD/received_events",
 *  "type": "User",
 *  "user_view_type": "public",
 *  "site_admin": false,
 *  "name": "Beerl",
 *  "company": null,
 *  "blog": "",
 *  "location": null,
 *  "email": null,
 *  "hireable": true,
 *  "bio": "Programador e desenvolvedor.\r\nProgrammer and developer.",
 *  "twitter_username": null,
 *  "public_repos": 6,
 *  "public_gists": 0,
 *  "followers": 8,
 *  "following": 2,
 *  "created_at": "2022-06-11T22:54:12Z",
 *  "updated_at": "2024-11-23T10:29:14Z"
 * }>}
 */
async function getUserInfo(username) {
    const url = `https://api.github.com/users/${username}`;
    
    try {
        const response = await fetch(url);

        if (!response.ok) 
            throw new Error(`Erro: ${response.status}`);
        
        const userInfo = await response.json();
        return userInfo;
    } catch (error) {
        console.error('Erro ao buscar informações do usuário:', error);
    }
}

