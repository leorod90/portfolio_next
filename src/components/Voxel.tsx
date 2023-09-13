// @ts-nocheck
import { loadGLTFModel } from '@/libs/model'
import { Box, Container, Spinner } from '@chakra-ui/react'
import React, { useEffect, useRef, useState, useCallback, Text } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import GreenText from './GreenText'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelCpu = () => {
  const refContainer = useRef()
  const refRenderer = useRef()

  // const urlDogGLB = (process.env.NODE_ENV === 'production' ? 'https://craftzdog.global.ssl.fastly.net/homepage' : '') + '/dog.glb'


  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-.5, 1.2, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      5 * Math.sin(.2 * Math.PI),
      10,
      5 * Math.cos(.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [])


  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer
      const scene = new THREE.Scene()

      const target = new THREE.Vector3(0, .8, 0)
      const initialCameraPosition = new THREE.Vector3(
        25000,   // Adjust the X position
        5000,    // Lower the Y position
        10       // Adjust the Z position
      )

      const scale = scH * 0.0001 + 4.0;  // Experiment with different scale values
      const camera = new THREE.OrthographicCamera(
        -scale / 4,
        scale / 4,
        scale / 4,
        -scale / 4,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      // Add a directional light from the top
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
      directionalLight.position.set(0, 100, 0) // Adjust the Y position for the top light
      scene.add(directionalLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target

      loadGLTFModel(scene, '/3d/3d_me.glb', {
        receiveShadow: false,
        castShadow: false
      }).then(() => {
        animate()
        setLoading(false)
      })

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        renderer.render(scene, camera)
      }

      return () => {
        cancelAnimationFrame(req)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [])


  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [handleWindowResize])

  const smlSq = 120
  const mdSq = 240
  const lgSq = 400

  const bg = 'blackAlpha.700'

  return (
    <Container
      w='95%'
      position='relative'
      mb='20px'
    >
      <Box
        cursor='pointer'
        ref={refContainer}
        bg='#413835'
        // className='voxel-cpu'
        m='auto'
        // mt={['-20px', '-60px', '-120px']}
        // mb={['-40px', '-140px', '-200px']}
        w={[mdSq, lgSq]}
        h={[mdSq, lgSq]}
        position='relative'
      >
        {loading && (
          <Spinner
            size='xl'
            position='absolute'
            left="50%"
            top="50%"
            ml='calc(0px - var(--spinner-size) / 2)'
            mt='calc(0px - var(--spinner-size))'
          />
        )}
      </Box>
      <Box
        borderRadius='lg'
        bg={bg}
        p={3}
        mb={6}
        alignItems='center'
        bottom='-24px'
        left={0}
        right={0}
        position='absolute'
      >
        Nice to meet you! I&apos;m a <GreenText fontWeight='bold'>Front End Developer</GreenText> and aspiring <GreenText fontWeight='bold'>UI/UX Designer</GreenText>.<br />
        You can wiggle my avatar :)
      </Box>
    </Container>
  )
}

export default VoxelCpu