const dom = {
    tagName: 'div',
    props: {
      class: 'box',
    },
    children: [
      {
        tagName: 'div',
        children: ['Div Node'],
      },
      {
        tagName: 'ul',
        props: {
          class: 'list',
        },
        children: [
          {
            tagName: 'li',
            children: ['li'],
            props: {
              class: 'list_item',
            },
          },
        ],
      },
    ],
  }


app.setAttributu("class", "box");
app.setAttributu("class", "");
