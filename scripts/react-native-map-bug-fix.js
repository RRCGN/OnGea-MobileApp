const replace = require('replace-in-file')

const options1 = {
  files: './node_modules/react-native-maps/lib/android/build.gradle',
  from: /compileOnly/g,
  to: 'provided'
}

const options2 = {
  files: './node_modules/react-native-maps/lib/android/build.gradle',
  from: /implementation/g,
  to: 'compile'
}

replace(options1)
  .then(changedFiles => {
    console.log('Modified compileOnly:', changedFiles)
  })
  .catch(error => {
    console.error('Error occurred:', error)
  }).then(
    () => {
      replace(options2)
        .then(changedFiles => {
          console.log('Modified implementation:', changedFiles)
        })
        .catch(error => {
          console.error('Error occurred:', error)
        })
    }
  )

console.log('react-native-maps bug is fixed!')
