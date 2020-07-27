const express = require('express');
const router = require('express-promise-router')();

router.route('/').get((req, res) => {
  return res.json({
    courses: [
      {
        title: 'Titulo 1',
        picUrl: '/ph_bebe_1.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi mi, scelerisque nec congue vel, feugiat vitae augue. Donec convallis placerat tellus vel molestie. Duis sed tellus eu tortor dictum imperdiet. Donec molestie mi est. Duis eget tortor at est tempus molestie eu a mauris. Nam faucibus erat in imperdiet pharetra. Mauris in pulvinar arcu. Suspendisse potenti. Quisque condimentum nisi at erat vulputate ornare at sed lacus.',
      },
      {
        title: 'Titulo 2',
        picUrl: '/ph_bebe_1.jpeg',
        description:
          'Vestibulum ut porta leo. Fusce mattis vel nisl sit amet pharetra. Fusce convallis mi vitae ex blandit, ac laoreet dui volutpat. Vivamus sollicitudin, nibh id imperdiet ultrices, ante lacus mattis augue, non mollis arcu nibh a arcu. Maecenas vitae placerat leo. Nunc vulputate urna libero, at consequat lectus consectetur quis. Aliquam condimentum est et massa blandit, eu accumsan justo dictum. Ut nec vestibulum tortor. Nunc tincidunt blandit tortor in fermentum. Cras placerat malesuada leo et vehicula. Fusce rutrum, ipsum consectetur sodales gravida, justo purus interdum diam, ac aliquam ante urna vitae ex. Curabitur eros dui, rutrum a porttitor ut, sodales id massa.',
      },
      {
        title: 'Titulo 3',
        picUrl: '/ph_bebe_1.jpeg',
        description:
          'Suspendisse turpis enim, vestibulum id tortor sit amet, volutpat accumsan felis. Morbi scelerisque condimentum varius. Sed ullamcorper hendrerit leo eget rhoncus. Curabitur non cursus urna. Duis aliquet, eros a porta fringilla, tortor ipsum tincidunt velit, eu convallis nunc ipsum eu elit. Maecenas feugiat enim ligula, eu convallis erat scelerisque ut. Aenean eget dui lorem. Duis pellentesque libero id erat tristique tincidunt. Etiam quis neque rutrum, vestibulum nisi eu, tincidunt urna. Sed porttitor consequat est. Aliquam sed neque odio. Pellentesque malesuada convallis dolor ut condimentum. Praesent fringilla odio eu ex pulvinar tincidunt. Mauris turpis orci, interdum a elit eget, scelerisque semper purus. Vivamus mauris dolor, suscipit et ex ut, cursus mattis magna.',
      },
      {
        title: 'Titulo 4',
        picUrl: '/ph_bebe_1.jpeg',
        description:
          'Nullam consectetur tellus nec lectus rutrum, eget blandit sem porttitor. Vestibulum vitae blandit sem. Cras urna mauris, lobortis ut urna luctus, bibendum dapibus tortor. Integer elit diam, facilisis quis magna non, ultrices ornare odio. Suspendisse potenti. Phasellus vel imperdiet ante, non bibendum sapien. Pellentesque interdum, felis eget bibendum consequat, augue nibh porttitor orci, sit amet hendrerit justo leo nec turpis. Etiam congue mauris in est euismod, at imperdiet eros finibus. Phasellus posuere ornare euismod. Fusce id est auctor, feugiat nunc ac, iaculis ex. Curabitur laoreet luctus scelerisque. Donec est est, placerat eu velit eu, volutpat porttitor massa. Etiam pharetra, velit in vulputate pretium, metus nulla tempus turpis, eu accumsan odio nisi non augue. Nunc feugiat semper risus, sed blandit metus consequat ac.',
      },
      {
        title: 'Titulo 5',
        picUrl: '/ph_bebe_1.jpeg',
        description:
          'Vestibulum rhoncus nisi libero, ac tristique leo congue sit amet. Integer aliquam, lorem euismod pellentesque efficitur, metus mauris egestas elit, sed feugiat nisi ante sit amet lorem. Proin condimentum venenatis vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget magna in massa euismod vestibulum. Duis elit eros, facilisis id nisi sit amet, fringilla tempus lacus. Phasellus lorem eros, pulvinar sodales neque quis, scelerisque sodales lectus. Duis dolor felis, tempor id tempus a, varius vel neque. Aliquam iaculis vel dolor nec scelerisque. Sed urna neque, malesuada et lacus vitae, interdum convallis magna. Nulla id urna metus. Vivamus eu mattis mi. Aenean vel imperdiet arcu, id pulvinar dolor. Cras ornare massa nisl, in blandit diam tempus vel.',
      },
      {
        title: 'Titulo 6',
        picUrl: '/ph_bebe_1.jpeg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi mi, scelerisque nec congue vel, feugiat vitae augue. Donec convallis placerat tellus vel molestie. Duis sed tellus eu tortor dictum imperdiet. Donec molestie mi est. Duis eget tortor at est tempus molestie eu a mauris. Nam faucibus erat in imperdiet pharetra. Mauris in pulvinar arcu. Suspendisse potenti. Quisque condimentum nisi at erat vulputate ornare at sed lacus.',
      },
    ],
  });
});

module.exports = router;
