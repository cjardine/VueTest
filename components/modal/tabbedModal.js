var TabbedModal = {
  template: `
    <modal>
      <template slot="modal-header">
      Create Patient
      </template>
      <template slot="modal-content">
        <ev-tabs>
          <div class="tab">
            <h1 class="title">foo</h1>
            <h2>This is content 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sit amet dui ut tincidunt. Etiam volutpat mi gravida suscipit commodo. Fusce vulputate tellus lorem. Sed ipsum elit, cursus non vulputate rhoncus, aliquam ac erat. Mauris lacinia consequat dignissim. Vivamus placerat purus ac tincidunt auctor. Cras porttitor viverra leo nec vestibulum. Donec posuere egestas volutpat. Curabitur ac lorem sed quam ullamcorper aliquet aliquet ut magna. In blandit pharetra orci quis posuere. Ut sed ultrices ante, at scelerisque turpis. Maecenas mattis urna ligula, eu cursus nibh congue sodales.</p>

          </div>
          <div class="tab">
            <h1 class="title">bar</h1>
            <h2>This is content 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sit amet dui ut tincidunt. Etiam volutpat mi gravida suscipit commodo. Fusce vulputate tellus lorem. Sed ipsum elit, cursus non vulputate rhoncus, aliquam ac erat. Mauris lacinia consequat dignissim. Vivamus placerat purus ac tincidunt auctor. Cras porttitor viverra leo nec vestibulum. Donec posuere egestas volutpat. Curabitur ac lorem sed quam ullamcorper aliquet aliquet ut magna. In blandit pharetra orci quis posuere. Ut sed ultrices ante, at scelerisque turpis. Maecenas mattis urna ligula, eu cursus nibh congue sodales.</p>

            <p>Nunc fringilla tellus ut felis convallis congue. Nam dictum sagittis tortor, vitae congue nisi pharetra id. Pellentesque euismod odio sapien, at malesuada sapien fringilla sit amet. Sed lobortis ligula magna, in semper mauris mollis ac. Vestibulum suscipit aliquam tempor. Praesent in orci mi. Quisque pharetra commodo elit ac dapibus. Nam mattis id magna et tincidunt. Pellentesque sit amet massa pellentesque, fringilla nulla eu, tempor ligula. Curabitur elementum venenatis consequat. Fusce id elit non velit dapibus molestie eu sit amet turpis. Praesent sed dolor at sapien dapibus condimentum.</p>
            
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rutrum venenatis orci sed sollicitudin. Cras feugiat metus non mollis tristique. Morbi eu turpis at mauris tempus dapibus. Nullam sed fermentum erat. Phasellus ultrices ante eros, ac mollis turpis placerat a. Suspendisse potenti. Sed diam nisi, finibus id sollicitudin nec, maximus nec tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            
            <p>Donec vel ligula in mauris tincidunt maximus. Integer nec turpis facilisis, varius quam nec, pharetra mauris. Nulla augue diam, finibus id lectus sit amet, vulputate volutpat ante. Phasellus augue orci, vestibulum eu fringilla a, posuere id risus. Nam malesuada efficitur metus ut accumsan. Nunc pulvinar a est sed vestibulum. Pellentesque venenatis, ipsum vitae tristique viverra, neque ante fermentum tellus, vitae pulvinar nisi erat ac arcu. Phasellus eu leo dictum, interdum dolor id, dapibus erat. Vivamus ut erat at est porta consequat. Vestibulum ut finibus lacus. Donec in ex auctor, semper odio quis, pulvinar diam. Etiam ultricies pellentesque tristique. Duis in fermentum lorem, a venenatis ligula.</p>
            
            <p>Integer blandit dignissim turpis, sit amet ultricies lorem vehicula eu. Aliquam et mi nisi. Pellentesque arcu nisi, tincidunt bibendum elit eu, accumsan tempor magna. Nulla facilisi. Cras diam elit, ullamcorper ac ultricies eu, condimentum in felis. Nulla maximus mi sit amet dolor finibus, vestibulum volutpat felis faucibus. Vestibulum sodales blandit elit egestas faucibus. Cras rutrum porttitor felis, at ullamcorper orci tristique auctor. Mauris quis purus hendrerit, tincidunt nisi eu, imperdiet nisl. Integer sit amet dolor quis metus fermentum porta. Proin vitae rhoncus velit. Aenean bibendum posuere molestie. Praesent suscipit libero et augue consequat, lobortis eleifend mauris convallis. Etiam finibus odio at diam sodales interdum. Phasellus eget erat nec nunc dignissim condimentum vitae sit amet justo.</p>
          </div>
          <div class="tab">
            <h1 class="title">baz</h1>
            <h2>This is content 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sit amet dui ut tincidunt. Etiam volutpat mi gravida suscipit commodo. Fusce vulputate tellus lorem. Sed ipsum elit, cursus non vulputate rhoncus, aliquam ac erat. Mauris lacinia consequat dignissim. Vivamus placerat purus ac tincidunt auctor. Cras porttitor viverra leo nec vestibulum. Donec posuere egestas volutpat. Curabitur ac lorem sed quam ullamcorper aliquet aliquet ut magna. In blandit pharetra orci quis posuere. Ut sed ultrices ante, at scelerisque turpis. Maecenas mattis urna ligula, eu cursus nibh congue sodales.</p>

            <p>Nunc fringilla tellus ut felis convallis congue. Nam dictum sagittis tortor, vitae congue nisi pharetra id. Pellentesque euismod odio sapien, at malesuada sapien fringilla sit amet. Sed lobortis ligula magna, in semper mauris mollis ac. Vestibulum suscipit aliquam tempor. Praesent in orci mi. Quisque pharetra commodo elit ac dapibus. Nam mattis id magna et tincidunt. Pellentesque sit amet massa pellentesque, fringilla nulla eu, tempor ligula. Curabitur elementum venenatis consequat. Fusce id elit non velit dapibus molestie eu sit amet turpis. Praesent sed dolor at sapien dapibus condimentum.</p>
            
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rutrum venenatis orci sed sollicitudin. Cras feugiat metus non mollis tristique. Morbi eu turpis at mauris tempus dapibus. Nullam sed fermentum erat. Phasellus ultrices ante eros, ac mollis turpis placerat a. Suspendisse potenti. Sed diam nisi, finibus id sollicitudin nec, maximus nec tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            
            <p>Donec vel ligula in mauris tincidunt maximus. Integer nec turpis facilisis, varius quam nec, pharetra mauris. Nulla augue diam, finibus id lectus sit amet, vulputate volutpat ante. Phasellus augue orci, vestibulum eu fringilla a, posuere id risus. Nam malesuada efficitur metus ut accumsan. Nunc pulvinar a est sed vestibulum. Pellentesque venenatis, ipsum vitae tristique viverra, neque ante fermentum tellus, vitae pulvinar nisi erat ac arcu. Phasellus eu leo dictum, interdum dolor id, dapibus erat. Vivamus ut erat at est porta consequat. Vestibulum ut finibus lacus. Donec in ex auctor, semper odio quis, pulvinar diam. Etiam ultricies pellentesque tristique. Duis in fermentum lorem, a venenatis ligula.</p>
            
            <p>Integer blandit dignissim turpis, sit amet ultricies lorem vehicula eu. Aliquam et mi nisi. Pellentesque arcu nisi, tincidunt bibendum elit eu, accumsan tempor magna. Nulla facilisi. Cras diam elit, ullamcorper ac ultricies eu, condimentum in felis. Nulla maximus mi sit amet dolor finibus, vestibulum volutpat felis faucibus. Vestibulum sodales blandit elit egestas faucibus. Cras rutrum porttitor felis, at ullamcorper orci tristique auctor. Mauris quis purus hendrerit, tincidunt nisi eu, imperdiet nisl. Integer sit amet dolor quis metus fermentum porta. Proin vitae rhoncus velit. Aenean bibendum posuere molestie. Praesent suscipit libero et augue consequat, lobortis eleifend mauris convallis. Etiam finibus odio at diam sodales interdum. Phasellus eget erat nec nunc dignissim condimentum vitae sit amet justo.</p>
          </div>
          <div class="tab">
            <h1 class="title">faz</h1>
            <h2>This is content 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sit amet dui ut tincidunt. Etiam volutpat mi gravida suscipit commodo. Fusce vulputate tellus lorem. Sed ipsum elit, cursus non vulputate rhoncus, aliquam ac erat. Mauris lacinia consequat dignissim. Vivamus placerat purus ac tincidunt auctor. Cras porttitor viverra leo nec vestibulum. Donec posuere egestas volutpat. Curabitur ac lorem sed quam ullamcorper aliquet aliquet ut magna. In blandit pharetra orci quis posuere. Ut sed ultrices ante, at scelerisque turpis. Maecenas mattis urna ligula, eu cursus nibh congue sodales.</p>

            <p>Nunc fringilla tellus ut felis convallis congue. Nam dictum sagittis tortor, vitae congue nisi pharetra id. Pellentesque euismod odio sapien, at malesuada sapien fringilla sit amet. Sed lobortis ligula magna, in semper mauris mollis ac. Vestibulum suscipit aliquam tempor. Praesent in orci mi. Quisque pharetra commodo elit ac dapibus. Nam mattis id magna et tincidunt. Pellentesque sit amet massa pellentesque, fringilla nulla eu, tempor ligula. Curabitur elementum venenatis consequat. Fusce id elit non velit dapibus molestie eu sit amet turpis. Praesent sed dolor at sapien dapibus condimentum.</p>
            
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rutrum venenatis orci sed sollicitudin. Cras feugiat metus non mollis tristique. Morbi eu turpis at mauris tempus dapibus. Nullam sed fermentum erat. Phasellus ultrices ante eros, ac mollis turpis placerat a. Suspendisse potenti. Sed diam nisi, finibus id sollicitudin nec, maximus nec tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            
            <p>Donec vel ligula in mauris tincidunt maximus. Integer nec turpis facilisis, varius quam nec, pharetra mauris. Nulla augue diam, finibus id lectus sit amet, vulputate volutpat ante. Phasellus augue orci, vestibulum eu fringilla a, posuere id risus. Nam malesuada efficitur metus ut accumsan. Nunc pulvinar a est sed vestibulum. Pellentesque venenatis, ipsum vitae tristique viverra, neque ante fermentum tellus, vitae pulvinar nisi erat ac arcu. Phasellus eu leo dictum, interdum dolor id, dapibus erat. Vivamus ut erat at est porta consequat. Vestibulum ut finibus lacus. Donec in ex auctor, semper odio quis, pulvinar diam. Etiam ultricies pellentesque tristique. Duis in fermentum lorem, a venenatis ligula.</p>
            
            <p>Integer blandit dignissim turpis, sit amet ultricies lorem vehicula eu. Aliquam et mi nisi. Pellentesque arcu nisi, tincidunt bibendum elit eu, accumsan tempor magna. Nulla facilisi. Cras diam elit, ullamcorper ac ultricies eu, condimentum in felis. Nulla maximus mi sit amet dolor finibus, vestibulum volutpat felis faucibus. Vestibulum sodales blandit elit egestas faucibus. Cras rutrum porttitor felis, at ullamcorper orci tristique auctor. Mauris quis purus hendrerit, tincidunt nisi eu, imperdiet nisl. Integer sit amet dolor quis metus fermentum porta. Proin vitae rhoncus velit. Aenean bibendum posuere molestie. Praesent suscipit libero et augue consequat, lobortis eleifend mauris convallis. Etiam finibus odio at diam sodales interdum. Phasellus eget erat nec nunc dignissim condimentum vitae sit amet justo.</p>
          </div>
          <div class="tab">
            <h1 class="title">fuz</h1>
            <h2>This is content 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit sit amet dui ut tincidunt. Etiam volutpat mi gravida suscipit commodo. Fusce vulputate tellus lorem. Sed ipsum elit, cursus non vulputate rhoncus, aliquam ac erat. Mauris lacinia consequat dignissim. Vivamus placerat purus ac tincidunt auctor. Cras porttitor viverra leo nec vestibulum. Donec posuere egestas volutpat. Curabitur ac lorem sed quam ullamcorper aliquet aliquet ut magna. In blandit pharetra orci quis posuere. Ut sed ultrices ante, at scelerisque turpis. Maecenas mattis urna ligula, eu cursus nibh congue sodales.</p>

            <p>Nunc fringilla tellus ut felis convallis congue. Nam dictum sagittis tortor, vitae congue nisi pharetra id. Pellentesque euismod odio sapien, at malesuada sapien fringilla sit amet. Sed lobortis ligula magna, in semper mauris mollis ac. Vestibulum suscipit aliquam tempor. Praesent in orci mi. Quisque pharetra commodo elit ac dapibus. Nam mattis id magna et tincidunt. Pellentesque sit amet massa pellentesque, fringilla nulla eu, tempor ligula. Curabitur elementum venenatis consequat. Fusce id elit non velit dapibus molestie eu sit amet turpis. Praesent sed dolor at sapien dapibus condimentum.</p>
            
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed rutrum venenatis orci sed sollicitudin. Cras feugiat metus non mollis tristique. Morbi eu turpis at mauris tempus dapibus. Nullam sed fermentum erat. Phasellus ultrices ante eros, ac mollis turpis placerat a. Suspendisse potenti. Sed diam nisi, finibus id sollicitudin nec, maximus nec tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            
            <p>Donec vel ligula in mauris tincidunt maximus. Integer nec turpis facilisis, varius quam nec, pharetra mauris. Nulla augue diam, finibus id lectus sit amet, vulputate volutpat ante. Phasellus augue orci, vestibulum eu fringilla a, posuere id risus. Nam malesuada efficitur metus ut accumsan. Nunc pulvinar a est sed vestibulum. Pellentesque venenatis, ipsum vitae tristique viverra, neque ante fermentum tellus, vitae pulvinar nisi erat ac arcu. Phasellus eu leo dictum, interdum dolor id, dapibus erat. Vivamus ut erat at est porta consequat. Vestibulum ut finibus lacus. Donec in ex auctor, semper odio quis, pulvinar diam. Etiam ultricies pellentesque tristique. Duis in fermentum lorem, a venenatis ligula.</p>
            
            <p>Integer blandit dignissim turpis, sit amet ultricies lorem vehicula eu. Aliquam et mi nisi. Pellentesque arcu nisi, tincidunt bibendum elit eu, accumsan tempor magna. Nulla facilisi. Cras diam elit, ullamcorper ac ultricies eu, condimentum in felis. Nulla maximus mi sit amet dolor finibus, vestibulum volutpat felis faucibus. Vestibulum sodales blandit elit egestas faucibus. Cras rutrum porttitor felis, at ullamcorper orci tristique auctor. Mauris quis purus hendrerit, tincidunt nisi eu, imperdiet nisl. Integer sit amet dolor quis metus fermentum porta. Proin vitae rhoncus velit. Aenean bibendum posuere molestie. Praesent suscipit libero et augue consequat, lobortis eleifend mauris convallis. Etiam finibus odio at diam sodales interdum. Phasellus eget erat nec nunc dignissim condimentum vitae sit amet justo.</p>
          </div>
        </ev-tabs>
      </template>
      <template slot="modal-buttons">
      <button @click="addModal()">New</button>
      <button @click="closeCallback()">Close</button>
      </template>
    </modal>
  `,
  methods: {
    closeCallback: function() {
      this.$emit('modal-close');
    },
    addModal: function() {
      this.$emit('modal-open', {name: 'TabbedModal', override: true});
    }
  }
};
