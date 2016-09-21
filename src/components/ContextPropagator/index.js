import React from 'react';

function getViewportData() {
  let viewport = 'xs';
  if (window.innerWidth >= 544) viewport = 'sm';
  if (window.innerWidth >= 768) viewport = 'md';
  if (window.innerWidth >= 992) viewport = 'lg';
  if (window.innerWidth >= 1200) viewport = 'xl';
  return viewport;
}

function renderThemedChildren(props) {

  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { theme: props.theme, viewport: getViewportData() });
  });

}

export default (props) => {
  return (<div>{renderThemedChildren(props)}</div>);
}
