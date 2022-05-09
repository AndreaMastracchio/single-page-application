import NextImage from 'next/image';
import { useEffect, useState } from 'react';

interface Navigator {
  type: string,
  effectiveType: string,
  saveData: boolean
}

const Image = (props) => {
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    if (props.loading === 'eager' || props.priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer;
      const onLoad = () => {
        clearDefer = defer(() => setLoading('eager'));
      };
      window.addEventListener('load', onLoad);
      return () => {
        window.removeEventListener('load', onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [props.loading, props.priority]);

  return <NextImage loading={loading} {...props} />;
};

const isMobileConnection = () => {

  // @ts-ignore 
  const connection: Navigator = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  return (
    connection?.type === 'cellular' ||
    connection?.effectiveType === 'slow-2g' ||
    connection?.effectiveType === '2g' ||
    connection?.effectiveType === '3g' ||
    connection?.saveData === true
  );
};

const defer = (callback) => {
  if (window.requestIdleCallback) {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  const handle = setTimeout(callback, 2345 + Math.random() * 1000);
  return () => clearTimeout(handle);
};

export default Image;