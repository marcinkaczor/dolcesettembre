/// <reference types="vite-plugin-svgr/client" />

import { Baby, Bed, Bus, Church, Clock, MapPin, PartyPopper } from 'lucide-react'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const targetDateUTC2 = new Date(Date.UTC(2025, 8, 27, 12, 0, 0)).getTime()
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const nowUTC = new Date().getTime() - new Date().getTimezoneOffset() * 60000
    const diffMs = targetDateUTC2 - nowUTC

    if (diffMs <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    return {
      days: Math.floor(diffMs / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diffMs % (1000 * 60)) / 1000),
    }
  }

  function getDayLabel(value: number) {
    return getPluralLabel(value, ['dzień', 'dni', 'dni'])
  }

  function getHourLabel(value: number) {
    return getPluralLabel(value, ['godzina', 'godziny', 'godzin'])
  }

  function getMinuteLabel(value: number) {
    return getPluralLabel(value, ['minuta', 'minuty', 'minut'])
  }

  function getSecondLabel(value: number) {
    return getPluralLabel(value, ['sekunda', 'sekundy', 'sekund'])
  }

  function getPluralLabel(value: number, forms: [string, string, string]) {
    const lang = navigator.language || 'pl'

    if (lang.startsWith('pl')) {
      if (value === 1) return forms[0]
      if (value % 10 >= 2 && value % 10 <= 4 && (value % 100 < 10 || value % 100 >= 20)) {
        return forms[1]
      }
      return forms[2]
    }

    return value === 1 ? forms[0] : forms[2] // np. "hour" / "hours"
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'var(--color-beige)',
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
              rowGap: 16,
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
            <div style={{ display: 'flex', columnGap: 32 }}>
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
                    width: 68,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  {timeLeft.days}
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  {getDayLabel(timeLeft.days)}
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
                    width: 68,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  {timeLeft.hours}
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  {getHourLabel(timeLeft.hours)}
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
                    width: 68,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  {timeLeft.minutes}
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  {getMinuteLabel(timeLeft.minutes)}
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
                    width: 68,
                    borderRadius: 8,
                    fontSize: '2em',
                  }}
                >
                  {timeLeft.seconds}
                </div>
                <span
                  style={{
                    color: 'var(--color-silver)',
                    fontFamily: '"Montserrat", sans-serif',
                    fontWeight: 400,
                    fontSize: '1em',
                  }}
                >
                  {getSecondLabel(timeLeft.seconds)}
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
        <div style={{ display: 'flex', columnGap: 16, marginBottom: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 16, width: 600 }}>
            <h3
              style={{
                marginTop: 16,
                marginBottom: 16,
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 400,
                fontSize: '2em',
              }}
            >
              Piktogramy
            </h3>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <Bed />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                nocleg wraz ze śniadaniem
              </span>
            </div>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <Bus />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                transport powrotny busem do domu - kursy o 0:00 i 2:00
              </span>
            </div>
            <div style={{ display: 'flex', columnGap: 8, alignItems: 'center' }}>
              <Baby />
              <span
                style={{
                  color: 'var(--color-silver)',
                  fontFamily: '"Montserrat", sans-serif',
                  fontWeight: 400,
                  fontSize: '1em',
                }}
              >
                opieka animatorek nad dziećmi w wieku od 2 do 10 lat w godzinach 18:00-22:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
