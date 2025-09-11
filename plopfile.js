module.exports = function (plop) {
  plop.setGenerator('feature-page', {
    description: 'Create a Next.js feature page inside app/(features)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'app/(features)/{{kebabCase name}}/page.tsx',
        templateFile: 'folder-templates/page.hbs',
      },
      // _api/index.ts
      {
        type: 'add',
        path: 'app/(features)/{{kebabCase name}}/_api/index.ts',
        templateFile: 'folder-templates/_api/index.hbs',
      },
      // _api/endpoints.ts
      {
        type: 'add',
        path: 'app/(features)/{{kebabCase name}}/_api/endpoints.ts',
        templateFile: 'folder-templates/_api/endpoints.hbs',
      },
      // _components/index.ts
      {
        type: 'add',
        path: 'app/(features)/{{kebabCase name}}/_components/index.tsx',
        templateFile: 'folder-templates/_components/index.hbs',
      },
      // _schema/list.ts
      {
        type: 'add',
        path: 'app/(features)/{{kebabCase name}}/_schema/list.ts',
        templateFile: 'folder-templates/_schema/list.hbs',
      },
    ],
  });
};
