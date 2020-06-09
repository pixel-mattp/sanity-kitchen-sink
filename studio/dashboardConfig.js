export default {
  widgets: [
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
                  buildHookId: '5edfed52a523e9019bc372db',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uf2xksoq',
                  apiId: '1aec586a-5147-4649-b54d-5fc0c98878e2'
                },
                {
                  buildHookId: '5edfed52fe4936ef6195986f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-inbv8k3y',
                  apiId: '54de2043-7277-42e5-94a5-22cd0685dd9f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixel-mattp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-inbv8k3y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
