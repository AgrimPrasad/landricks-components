import React from 'react';
import styles from './styles';
import { ThemePropagator } from '../../';

function renderFeature(feature, s) {
  return (
    <article key={feature.key} style={s.feature}>
      <h5 style={s.featureTitle}>{feature.title}</h5>
      <p style={s.featureDescription}>{feature.description}</p>
    </article>
  );
}

export default (props) => {

  let s = styles(props);

  return (
    <section style={ s.box }>
      <h3 style={ s.title }>{ props.title }</h3>
      <h4 style={ s.subtitle }>{ props.subtitle }</h4>
      <div style={ s.featureContainer }>
        { props.features.map((f) => renderFeature(f, s)) }
      </div>
    </section>
  );

}
