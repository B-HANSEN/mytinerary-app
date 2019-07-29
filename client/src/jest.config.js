// Then, simply require/import React, enzyme functions, and your module at the top of a test file.
import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Foo from '../Foo';


// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
// test file
import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<Foo />);

// To run the setup file to configure Enzyme and the Adapter with Jest, set 
// setupFilesAfterEnv in your config file to literally the string <rootDir> and the path to your setup file.
{
    "jest": {
      "setupFilesAfterEnv": ["<rootDir>src/setupTests.js"]
    }
  }

// Examples
  describe('A suite', function() {
    it('should render without throwing an error', function() {
      expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
    });
  
    it('should be selectable by class "foo"', function() {
      expect(shallow(<Foo />).is('.foo')).toBe(true);
    });
  
    it('should mount in a full DOM', function() {
      expect(mount(<Foo />).find('.foo').length).toBe(1);
    });
  
    it('should render to static HTML', function() {
      expect(render(<Foo />).text()).toEqual('Bar');
    });
  });