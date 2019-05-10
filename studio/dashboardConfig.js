export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-eventswerwr-studio',
                  apiId: 'dcd6d83c-359a-430a-830a-a533c2a26382'
                },
                {
                  buildHookId: '5cd54c3f0f75d20923810a06',
                  title: 'Events Website',
                  name: 'sanity-nuxt-eventswerwr',
                  apiId: '8f6e8c79-8aec-4c9f-9a01-43ab2e8b202d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nuxt-eventswerwr',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-eventswerwr.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
