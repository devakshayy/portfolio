const Header = ({ dark }) => {
  return (
    <header className="grid grid-cols-1 p-10 lg:grid-cols-2">
      <div className="sm:py-4 py-3 lg:px-20 md:px-15 flex justify-center items-center">
        <img
          src="/myProfile1.png"
          alt="profile-pic"
          className="h-[200px] bg-[#d5d7df] dark:bg-gray-500  shadow-2xl lg:h-[460px] rounded-full"
        />
      </div>
      <div className="sm:p-10 flex justify-center items-center flex-col gap-3 sm:gap-5">
        <div className="sm:text-3xl text-lg font-bold text-gray-700 dark:text-gray-400">
          Hi I'm
        </div>
        <div className="sm:text-6xl text-2xl font-bold text-gray-900 dark:text-gray-100">
          Akshay,
        </div>
        <div className="sm:text-3xl text-lg font-bold text-gray-700 dark:text-gray-400">
          a Frontend Developer
        </div>
        <div className="flex gap-2  sm:gap-3">
          <a
            href="/resume-example.pdf"
            download={"resume-example.pdf"}
            className="no-underline"
          >
            <button
              className="card-hover p-2 sm:p-3 rounded-full px-2 sm:px-6 hover:bg-gray-800
                             text-sm  sm:text-lg     hover:text-white transtition duration-300
                             dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900
                             "
            >
              Download CV
            </button>
          </a>
          <a href="#contact">
            <button
              className="bg-gray-700 text-white hover:bg-gray-900
                            text-sm  sm:text-lg    px-3 sm:px-6 p-2 sm:p-3 rounded-full transition transform
                            dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-gray-50
                            "
            >
              Contact Info
            </button>
          </a>
        </div>
        <div className="flex gap-4 mt-1">
          {dark ? (
            <>
              <a href="https://github.com/devakshayy">
                <img
                  className="w-12"
                  src="data:image/png;base64,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"
                  alt="github"
                />
              </a>
              <a href="https://www.linkedin.com/in/akshayparamasivan/">
                <img
                  className="w-12"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFV0lEQVR4nO2dXWwVRRTH14+o+GIUMFED+qS++9CXgm3A0tIWrcLFijEYEFQEChbUqIlGozy0xrb6UIsYjeFFxQ8MpCovROMbilCknxRrGyK2lpL0w0R+5lynybWxtr07uzuzM79kkmbv7nbm/O+dOXtm5mwQeDwej8fj8Xg8Ho9BADcCK4BtwNvAN8BPQDcwBEyoMqSOyWdfq3O3AiXAwqTbYQ3AtcC9QIMy5iXCI/c4DrwJrALmJd1OowAuBwqBZuAC0SP/4wOgErgicBXgGuBJoIfkkG7rCeDqwLFuphYYwBykLjulbkGaUT/7M5hLH7A6SBvAbcBB7OFzYHGQBoD7lJtoGxeATGArMrApd9J2mq0bpIH5wPekh2+BGwIbAG5WD1Fp4xSwKDAZ4E7gF9LLWeCOwESAW4Be0s+vwK2BgX2+/ERdoc2YMUF5O2kacGfLd0Z4R8BbuEtD0sZfnbQFDOD+JMMLw0m33gD+SGRQBr7It8ZtpzvZvvtlilZWc3fpg2ytfSl7zGI+SyK+kxdi6CUrMhQUV/2ryLHTHRKet5bKOOP5efv78s2favwCVXa/uAeL6YlluhPYFaaWRWXV0wqw8oFHsZyaOHz+/jA1LK1an2YBBmSqNUoBZA43FLteeH1aAWqff40UsDnK1QuhJ9DP9Pb95yC8tHQt7Z1Jzs9rowu4LAoBinXVUDwhcT2LyqopLn+IHc++QntHKow/ydIoBNiXdKssokW38ef5p945zyfrc0nVckHP3CjXKUAaJtfjpk6nANrmeKdzQQtU0XXdhZGLfPTpIXY+9yqr1j5GYUkmO+hnHnkq+8R98PARRkYuEiE/6FwirmOVciwCjI9P0LxvfzbQN9M1yyrW8d6HH2eviYC/gAU6BJD1+dggQP/AOdZtqJnx3Kll/eO1/HZ+kAhYrkMA2RxhvAD9A+eozGycs/Eni1wbgQhbdAggu02MF+DhjTvyNn7uL2Fi4k+dzW3UIYBs+TFegAJN5f39n+hsbqsOAU64JMCyinU6vaPjOgTodUmAguIqvjx8RFdze3QIMGiTAIUlGeqb9nLyVDujY2PZIn/XNbZkP5vNPZ7RNzN3XocAE7YIULFmAx1d02/AkXC3nDPTfeRhTRPjzghQWJL5X+PnijDTL0FC5CYJYEUXVN+0d9Z1qGtoybseSXRBVgzCbT93zLoOJ9ra4xKgxxk3dHR0bNZ1kHNjEuC4Mw9icyUmAVqdCUUYKkCjM8E4QwXY4lQ42kABtISjF9o0IWOQADIhMz+0ALZOSRogwDEtxlcCSLIjLTgkQJ1OASTTlBYcEmClkQuzHBFgWPteAeDdsLVySIB3tBpfCVAUtlYOCbAkquXpoTdxOSBAZyTL05UIkuAuFA4IsCkS4+vaopRyAfoiT18APJ1v7RwQYFukxs/Zppp35sMUC9AV6Qa9KSKU5VPDlFMei/FzRJDUjp5/OBCr8ZUAi1WiCtcZSiyXHFChM1RtIdL2qkSMnyOCy9uX3kjU+DnPBpK+yzWOAlcFJgBcB/yIO5w0Jmmfg2kr+4xN7C1JTVVy07RyFrg9MBngJvXOljTmCl0U2ID0jykbmI8C1wc2AVwJ7LH8OeGScrPN8HZC5Jmw9QUOa4I0IHk1LYsdHbCmv88jdGFyZqbu2KOacaOWuNSoNPAm+fbbY4vnm4AKYWxWExlJIRPom6weZHUA3KW8jd9jMPqwepXh8shWL1j+esNyiTJKvh21wjgsco9jQL0sF3SqmwkLsAC4RzY6AE3AVyro1612b06+znZQHZPPWtW5W9S3XM8ScY/H4/F4PB6Px+MJ9PA3QLGPGHj0M7gAAAAASUVORK5CYII="
                  alt="linkedin-circled--v1"
                />
              </a>
            </>
          ) : (
            <>
              <a href="https://github.com/devakshayy">
                <img
                  className="w-12"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFiklEQVR4nO2cW4hVVRjHfzMem5maRmjsxoRGFwLLKSsty4rKhIisHkqMDLpoZZGXtCR68KGiJKIiH6Kil160i+kImb4EZnSXTKgeisQysxpHmGhqxtmx4AsOhzlz1nXvtWfWD9bLMHuv7/uftdflW99akEgkEolEIpFIJBIJbSYAM4F7gHXAe8Ae4AegF/hHSq/8bY/8z7PyzMXyjsQInAYsB3qAI0DmWPqALcAyoItxThuwCNgBHPUgbr0yBGwH7gBaGUe0S0v7JaC49cohYC0wiTHMRGA18GcBAtcWZcMjYtOY4grgmwgEri3fAXMZA6g+cT0wHIGo9Yqy7SWghZJyOvBJBEJmmuVL4CxKxlxP07Qs56KmhddQEm4B/o5AtMyyqMXQAiJnSeA5cZZTUT4sJlJulsVB0SJlHsW+jchQ/dpABOJkAbqReUTC2SUd+DKDAfLMokVukWlRNsbLF0XPs9cbGrwfOBE4GbgEWAnsylm0XVKvqv8U4CTgZ43n1KKmEK6yWPGtrPOuGRJhCynwdqlnJFZpPK98nUPOqGDMXgtnpzd47zIZgHwKrN73cIN6z9d8l9pkqJAjqy2dbtd49+VVg+tB4B1gDTAf6AY6gePkf9X7JotQNwGPA5skHJrJe9T7GtFh4MMKcuJ4h1BnRbOOC4FZQLOljeq52cBFBl+org+/azYYZx51+Iw7iJNJhn6oWHbwsOcBB6HPI066Df34VbbignGn48B0A3Ey38KX20MatMNR6FXEic3gvi2UMV0egkabiJMtlkGnIKkMyx1FzmTnO0YOWvrzUAhjejwI/SBxYrsueNe3ISrF6rCjyBuIlybp1kx9Ouw7/Wymo8hHZEUXM6cCf1n4prso0uJeR6GfoBw8Y+HbXT4NWOcgcr8s28vACRZBLfXjeGOzg9BvUy7eL3JA/NpB6EWUi/sN/dvts/KfHISeTrmYbejfjz4rd8kA7aRcTDH0T4VNvWG76zHsEFMuimMNfVRpFt74N7Vo6gmttPFGn0PXMY1yMctidegNl2MQ11MuFhj6p1IVopjePUm5eMPQv69iWbB8T3lotgiZeo2xv+AgdAZcTTm40cI3pY037nMU+iMJRcZMRboBU9/u9mnEDEehM2ApcfOYpV8qecfrr93vKPSAZtZQEVwHDFr41B8iRWybh1bdB1xGfEn0to1Ibep6Z6kHoTM5SOS1X7OkSTZXXVa9D4S6gcDnwcwe4FyK4QIPOSpHRZMgfOhR6Ex+uB7Zk8xL4I2eGswHIQ1d6FnorKqos+JPSzzYV8RvgpxDV1tx33q2N2hKWEtV7nHI0gvsBF6RxB3dwNQ0OVXwKvCxYzCsUXzjGAKzRsOQa4FzgOccB5sMeNkgc7NVzpqEbgi55BC2a7Tq16rml90OW2FPWdq4NqDIh/LM816hYdDGqmV3l+ytmTj0loN9TVJ/CKGDTOlGO4qgc9HJ4pr+s8+g1ahjci50yn6eT5H35n1YCBnNhzUGjbaqZ+Zp7j+q4xt5fXm6ZUhmRIXwvIaBS0bYKtoqrW2wapahdnE+lYSUDo/jiWty5v9FDeyFMVHjlpmdRRoIvO5B5N2hz6zooK7H+WMUI4dlqlcUtzqKrL68qUTCnAbXSLxYoG1nOAbAriTC3eN6Z1wGfOcRG9DmMPipy16iZOEoAfT9BY7apiIPho5l+OoTB0Zx4E05bzglx5sUTbsLde6wFKhdlN8sP9kQmJyIjW0HqCFTZV6clUToz0IG8kNTkQDPUMRCD8rxiOBhzzy4VO4lik3oz3Pc3cmNZlmON7odIQS1dRyQgFfZcreNaJUTtPsKEHqf7HyPq5vRKzKN2lwz924JkMG/VerKPcQZG5Pl9NYGWTInEolEIpFIJBKJRCLB2OI/bOLhdXH1ONAAAAAASUVORK5CYII="
                  alt="github"
                />
              </a>
              <a href="https://www.linkedin.com/in/akshayparamasivan/">
                <img
                  className="w-12"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFTElEQVR4nO2dy09cVRzHPz4iUEgM2JooaSsbK6s+DI+FGk3QxmfVVNdlY2OJ1fhICEtWLrRxwC6q0YV/AA+FBKmrRuOiiYKPhqQvC1hCtHVaaJku4GfO5JiQxmGGuefec86955N8EzLMDOf+vsw5v/s7j4FAIBAIBAKBQCAQcIv7gf3AUeA48B3wC3AeuArc0rqqH1O/O6mf+xbwDLDN9kX4xBbgAJDTwVwDJKLUe0wDnwAvAXW2L9I17gQeA04A1wwEvJzU3/gKeBG4iwxTCxwBLiQQ9FJS3dabQA0Z62beBy5bDPztUm15V7ct1aiP/UUHAi4lNAccJIU8BHzjQIClQo0CO0gJL+s0UTzTNeB1PKZGp5PiuU74OEjfB/zoQPDEkL4HmvCEB/VNlKRMZ4DtOM4jwKwDwZKYdAnYhaM0A384ECSJWfPAThzs8884EBxJSL+7NCbUpGzAlQr1gyvZ0acOBEMsSaXZVjnoQBDEsl61WV7IOxAAsax/bA3KX1fb6La2NpmYmJClpSW5ceOGTE5OFh9zIJjVasRGfafq4K+srMjtrKysyL59+2wHMopUpTcRtkTJ99V/fimGh4dtBzGKLiQ13flBlIYuLy+XNGBhYcF2EKPqnbiDr/LeP6M0cnFxMc0GXNZTrbFxJGojR0ZGShowOjpqO4AmdDjO1QuRJ9BbW1v/dxC+efOm7Nmzx3bwTOgccEccBjxlqpEqE1Kp5/Lysly/fl3Gx8dl7969tgNnUk/EYcCXDlyYeKLPTQdfpVfhrpdNzScbTUkPOPBfJZ7peZMGpGFyXRLWRyYNMDbHWw4Mva6pqUl6enpkbGxMZmdnpVAoFAf9mZmZ4h13d3e3NDY2xmnAzyaXiK/5YkBdXZ309/cXC33lyOfz0tfXV3xNDAasAltNGLDfZMPiNKClpUWmp6dls5w+fVqam5vjMKHLhAFHfTCgpaVF5ubmpFrUa2MwoceEAcd9MGBqakqioj4JtbW1Jg0YMGHASR8MMEVvb69JA741YcCvWTIgn8+bzI7U1qjIGF1s5boBikOHDpm6XlW8jMwVnwwoFAqSy+Wko6ND6uvri1I/DwwMFH9XCUNDQ6au9y8TBtzyxYD5+XnZvXt3yfdQ5W71nHKomzVD11vIjAGFQmHD4K83odwnQZXIXTLAiy4ol8tV3IbBwcGq22GjC/JiEG5vb6+4DZ2dnUkZcCEzaWhDQ0PFbVDPTciA6czciJFQO2zciHlRisBNAwYyU4zDTQN6MlWOxj0DjJSjt/k0IYM7BqzqrVvZnJLEvgE/YRB12FEwAHuT8uqkqWAAm4rBc04uzMpIF5SPY6/AF8EAKjXgM2LgyWAAlRrweFzL09UZa6ELYsMYnI1reTr6gLtgABvG4A1c3qKU8kF4LonjC94LBlDKAFU3S2SbatUnH6b4E3Au7g1663nWREZEumR0P0AljDpw0eKIhrDADn1QhWRcV22eJfeCyVI1/kld+ytYJsvbl47hADX6+C7JmE4B9+AI9wJTDgRFEtJvLh3al7VjK+dcPth7lz7cVFKqS8DDOM4DekWYpPCs0O14QlPKBuZTQCOecTfwoef3CWs6zXYm26n2nAlfv8DhNVLCTs9qR0M+9febLV3Y/NoqKaPzNqqaSVOnTxecdyDg63P7t5Os57tSwjisJzJsBf6snsP1epA1waM62/g7gaDn9VcZdsW5esFXanUffEyft7NqIOCreqHsx3q5YKa6mahsBZ7WGx0GgUld9Duvd2/+93W2V/RjU3pb0KB+TZfJJeKBQCAQCAQCgUAggAH+Ba6hYVJmfZrIAAAAAElFTkSuQmCC"
                  alt="linkedin-circled--v1"
                />
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

// #374151  grey-700 the background of my project
