const { withNativeFederation, shareAll } =
 require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'about',

  exposes: {
    './Component': './projects/about/src/app/app.component.ts',
    './TeamElement': './projects/about/src/app/elements/team-element.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ]
});
