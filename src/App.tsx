/// <reference types="vite-plugin-svgr/client" />

import { Church, Clock, MapPin, PartyPopper } from 'lucide-react'
import './App.css'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'var(--color-beige)',
        height: '100dvh',
        width: '100dvw',
      }}
    >
      <h1 style={{ fontFamily: '"Cormorant", serif', fontWeight: 300, fontSize: '4em' }}>
        KASIA & MARCIN
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', rowGap: 48 }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              rowGap: 24,
            }}
          >
            <span
              style={{
                color: 'var(--color-silver)',
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                fontSize: '1em',
              }}
            >
              Bawimy się za
            </span>
            <div style={{ display: 'flex', columnGap: 48 }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  rowGap: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'start',
                    color: 'white',
                    backgroundColor: 'var(--color-beige)',
                    height: 104,
                    width: 64,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  207
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  dni
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  rowGap: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'start',
                    color: 'white',
                    backgroundColor: 'var(--color-beige)',
                    height: 104,
                    width: 64,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  12
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  godzin
                </span>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  rowGap: 8,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'start',
                    color: 'white',
                    backgroundColor: 'var(--color-beige)',
                    height: 104,
                    width: 64,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  4
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  minuty
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', columnGap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16, width: 300 }}>
            <h3
              style={{
                marginTop: 16,
                marginBottom: 16,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                fontSize: '2em',
              }}
            >
              Ślub
            </h3>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <Clock />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                14:00
              </span>
            </div>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <Church />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                Parafia Świętej Trójcy w Bytomiu
              </span>
            </div>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <MapPin />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                Józefa Kwietniewskiego 1, 41-902 Bytom
              </span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.962508917518!2d18.914972841739658!3d50.34860464387933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e22b538bf60d05%3A0x549b6e72fcacfee0!2sParafia%20%C5%9Awi%C4%99tej%20Tr%C3%B3jcy%20w%20Bytomiu!5e0!3m2!1spl!2spl!4v1741124478691!5m2!1spl!2spl"
            width="300"
            height="225"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div style={{ display: 'flex', columnGap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16, width: 300 }}>
            <h3
              style={{
                marginTop: 16,
                marginBottom: 16,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                fontSize: '2em',
              }}
            >
              Wesele
            </h3>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <Clock />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                po ślubie
              </span>
            </div>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <PartyPopper />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                Sala Stara Szwajcaria
              </span>
            </div>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <MapPin />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                Łabędzka 6, 44-100 Gliwice
              </span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.0391720896032!2d18.63103699722957!3d50.30766795042239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711319f8c6849b3%3A0xc58b39055c51c5d!2sStara%20Szwajcaria!5e0!3m2!1spl!2spl!4v1741124044856!5m2!1spl!2spl"
            width="300"
            height="225"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default App
