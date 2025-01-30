import { Lock } from "../../assets/icon";
import { Status } from "../../const";

const BetSlip = ({ data, status }) => {
  console.log(data);
  return (
    <div className="lg:absolute   flex flex-col perspective  w-full transition-all ease-in-out duration-1000 items-center justify-center   lg:bottom-12  ">
      <div
        className={`grid grid-cols-16 lg:grid-cols-12 grid-row-4 gap-x-0.5 h-fit gap-y-0.5 w-full mx-auto max-w-2xl px-2 transition-all ease-in-out duration-1000 backdrop-blur-sm
   ${status === Status.SUSPENDED ? "applyPerspective" : ""}`}
      >
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 
     "
          id="Don-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            Don
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>

          {data?.[0]?.status === Status.OPEN ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[0]?.back[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  
     "
          id="Don-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>

          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[0]?.lay[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 
     "
          id="AmarAkbarAnthony-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            AmarAkbarAnthony
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  
     "
          id="AmarAkbarAnthony-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[1]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 
     "
          id="SahibBibiAurGulam-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            SahibBibiAurGulam
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[2]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[2]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  
     "
          id="SahibBibiAurGulam-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[2]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[2]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 
     "
          id="DharamVeer-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            DharamVeer
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[3]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[3]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  
     "
          id="DharamVeer-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[3]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[3]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 
     "
          id="KisKisoPyaarKaroon-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            KisKisoPyaarKaroon
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[4]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[4]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  
     "
          id="KisKisoPyaarKaroon-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[4]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[4]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-l from-blue to-blue/70 rounded-l-md h-16 
     "
          id="Ghulam-back"
        >
          <span className="absolute top-0 right-0 z-50 flex items-center h-4 gap-1 px-2 text-xs font-semibold tracking-wider text-white translate-x-1/2 rounded-b-sm bg-black/40">
            Ghulam
          </span>
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Back
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[5]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[0]?.runners?.[5]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     col-span-4 lg:col-span-2
     bg-gradient-to-r from-red to-red/70 rounded-r-md h-16  
     "
          id="Ghulam-lay"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Lay
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[0]?.status === Status.OPEN &&
          data?.[0]?.runners?.[5]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  right-0.5">
              {data?.[0]?.runners?.[5]?.lay?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 right-0.5" />
          )}
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px]
     "
          id="K-Q"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            K-Q
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[2]?.status === Status.OPEN &&
          data?.[2]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[2]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px]
     "
          id="J-A"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            J-A
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[2]?.status === Status.OPEN &&
          data?.[2]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[2]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1" />
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px]
     "
          id="Red"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Red
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[3]?.status === Status.OPEN &&
          data?.[3]?.runners?.[0]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[3]?.runners?.[0]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex h-3 gap-1 w-fit">
              <svg
                width={198}
                height={260}
                viewBox="0 0 198 260"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                  fill="#DD181F"
                />
              </svg>
              <svg
                width={220}
                height={194}
                viewBox="0 0 220 194"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="Vector"
                  d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                  fill="#DD181F"
                />
              </svg>
            </span>
          </span>
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 bg-gradient-to-b from-gray/40 to-gray/20 h-[50px]
     "
          id="Black"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Black
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          {data?.[3]?.status === Status.OPEN &&
          data?.[3]?.runners?.[1]?.status === Status.ACTIVE ? (
            <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
              {data?.[3]?.runners?.[1]?.back?.[0]?.price}
            </span>
          ) : (
            <Lock position="bottom-0.5 left-0.5" />
          )}

          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex h-3 gap-1 w-fit">
              <svg
                width={209}
                height={211}
                viewBox="0 0 209 211"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="Vector"
                  d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                  fill="black"
                />
              </svg>
              <svg
                width={209}
                height={235}
                viewBox="0 0 209 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  id="Vector"
                  d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                  fill="black"
                />
              </svg>
            </span>
          </span>
        </div>
        {data?.[4]?.runners?.map((runner) => {
          return (
            <div
              key={runner?.id}
              className="relative   flex flex-col items-center justify-center  
         cursor-pointer
         false
         false
         rounded-md col-span-4 lg:col-span-3 h-[50px] bg-gradient-to-b from-gray/40 to-gray/20 
         "
              id="J"
            >
              <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
                {runner?.name}
              </span>
              <div className="z-50">
                <div className="relative w-10 h-10" />
              </div>
              {data?.[4]?.status === Status.OPEN &&
              runner?.status === Status.ACTIVE ? (
                <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
                  {runner?.back?.[0]?.price}
                </span>
              ) : (
                <Lock position="bottom-0.5 left-0.5" />
              )}

              <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
                <span className="flex justify-between w-full h-3">
                  <span className="flex gap-1 w-fit">
                    <svg
                      width={209}
                      height={211}
                      viewBox="0 0 209 211"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        id="Vector"
                        d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                        fill="black"
                      />
                    </svg>
                    <svg
                      width={209}
                      height={235}
                      viewBox="0 0 209 235"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        id="Vector"
                        d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <span className="flex gap-1 w-fit">
                    <svg
                      width={198}
                      height={260}
                      viewBox="0 0 198 260"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                        fill="#DD181F"
                      />
                    </svg>
                    <svg
                      width={220}
                      height={194}
                      viewBox="0 0 220 194"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      <path
                        id="Vector"
                        d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                        fill="#DD181F"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </div>
          );
        })}
        {/* <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 h-[50px] bg-gradient-to-b from-gray/40 to-gray/20 
     "
          id="J"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            J
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
            3.75
          </span>
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex justify-between w-full h-3">
              <span className="flex gap-1 w-fit">
                <svg
                  width={209}
                  height={211}
                  viewBox="0 0 209 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width={209}
                  height={235}
                  viewBox="0 0 209 235"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="flex gap-1 w-fit">
                <svg
                  width={198}
                  height={260}
                  viewBox="0 0 198 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                    fill="#DD181F"
                  />
                </svg>
                <svg
                  width={220}
                  height={194}
                  viewBox="0 0 220 194"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                    fill="#DD181F"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 h-[50px] bg-gradient-to-b from-gray/40 to-gray/20 
     "
          id="Q"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            Q
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
            3.75
          </span>
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex justify-between w-full h-3">
              <span className="flex gap-1 w-fit">
                <svg
                  width={209}
                  height={211}
                  viewBox="0 0 209 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width={209}
                  height={235}
                  viewBox="0 0 209 235"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="flex gap-1 w-fit">
                <svg
                  width={198}
                  height={260}
                  viewBox="0 0 198 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                    fill="#DD181F"
                  />
                </svg>
                <svg
                  width={220}
                  height={194}
                  viewBox="0 0 220 194"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                    fill="#DD181F"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 h-[50px] bg-gradient-to-b from-gray/40 to-gray/20 
     "
          id="K"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            K
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
            3.75
          </span>
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex justify-between w-full h-3">
              <span className="flex gap-1 w-fit">
                <svg
                  width={209}
                  height={211}
                  viewBox="0 0 209 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width={209}
                  height={235}
                  viewBox="0 0 209 235"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="flex gap-1 w-fit">
                <svg
                  width={198}
                  height={260}
                  viewBox="0 0 198 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                    fill="#DD181F"
                  />
                </svg>
                <svg
                  width={220}
                  height={194}
                  viewBox="0 0 220 194"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                    fill="#DD181F"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div>
        <div
          className="relative   flex flex-col items-center justify-center  
     cursor-pointer
     false
     false
     rounded-md col-span-4 lg:col-span-3 h-[50px] bg-gradient-to-b from-gray/40 to-gray/20 
     "
          id="A"
        >
          <span className="absolute text-xl font-bold -translate-x-1/2 -translate-y-1/2 text-white/40 top-1/2 left-1/2 ">
            A
          </span>
          <div className="z-50">
            <div className="relative w-10 h-10" />
          </div>
          <span className="absolute font-mono tracking-tighter bottom-0.5 text-[8px] text-white  left-0.5">
            3.75
          </span>
          <span className="absolute top-0 left-0 flex items-center justify-start w-full h-4 gap-1 p-1">
            <span className="flex justify-between w-full h-3">
              <span className="flex gap-1 w-fit">
                <svg
                  width={209}
                  height={211}
                  viewBox="0 0 209 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M159.999 78.8C151.699 78.8 143.999 80.9 137.199 84.5C146.899 75.6 152.999 62.9 152.999 48.7C152.999 21.9 131.299 0.100098 104.399 0.100098C77.5992 0.100098 55.7993 21.8 55.7993 48.7C55.7993 63 61.9992 75.7999 71.8992 84.7C64.9992 80.8999 57.0994 78.7 48.5994 78.7C21.8994 78.7 0.199219 100.4 0.199219 127.1C0.199219 153.8 21.8994 175.5 48.5994 175.5C72.7994 175.5 92.7992 157.7 96.3992 134.5C99.3992 157.8 92.2994 185.2 76.5994 210.9C85.7994 210.9 95.0993 210.9 104.299 210.9C113.499 210.9 122.799 210.9 131.999 210.9C116.299 185.2 109.199 157.9 112.199 134.5C115.799 157.7 135.799 175.5 159.999 175.5C186.699 175.5 208.399 153.8 208.399 127.1C208.399 100.4 186.699 78.8 159.999 78.8Z"
                    fill="black"
                  />
                </svg>
                <svg
                  width={209}
                  height={235}
                  viewBox="0 0 209 235"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M208.199 125.3C202.599 64.5 104.599 0.400024 104.599 0.400024C104.599 0.400024 12.6993 63.7 1.79932 120C1.49932 121.3 1.39922 122.6 1.19922 123.9C1.09922 124.3 1.09927 124.7 0.999268 125.1C0.799268 126.9 0.699219 128.7 0.699219 130.6C0.699219 159.3 23.9992 182.6 52.6992 182.6C71.2992 182.6 87.4992 172.8 96.6992 158.2C98.4992 181.8 90.8992 208.7 75.3992 234.1C85.1992 234.1 94.8992 234.1 104.699 234.1C114.499 234.1 124.199 234.1 133.999 234.1C118.399 208.7 110.899 181.7 112.699 158.2C121.899 172.9 138.099 182.6 156.699 182.6C185.399 182.6 208.699 159.3 208.699 130.6C208.499 128.9 208.399 127.1 208.199 125.3Z"
                    fill="black"
                  />
                </svg>
              </span>
              <span className="flex gap-1 w-fit">
                <svg
                  width={198}
                  height={260}
                  viewBox="0 0 198 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M151.5 77.6C130.7 50.3 114.6 24.1 102.2 0.699951C89.4002 22.4 73.4002 46.5 53.7002 71.4C40.8002 87.7 23.3002 108.1 0.700195 130.3C17.5002 146.8 35.6002 166.3 53.7002 189.2C73.4002 214.1 89.4002 238.2 102.2 259.9C114.6 236.6 130.7 210.3 151.5 183C167 162.7 182.5 145.2 197.1 130.2C182.5 115.4 167 97.9 151.5 77.6Z"
                    fill="#DD181F"
                  />
                </svg>
                <svg
                  width={220}
                  height={194}
                  viewBox="0 0 220 194"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    id="Vector"
                    d="M220 55.3C220 24.9 195.4 0.299988 165 0.299988C134.6 0.299988 110 24.9 110 55.3C110 24.9 85.4 0.299988 55 0.299988C24.6 0.299988 0 24.9 0 55.3C0 57.3 0.100049 59.2 0.300049 61.1C0.300049 61.5 0.4 62 0.5 62.4C0.7 63.8 0.900098 65.1 1.1001 66.5C12.7001 126.1 109.9 193.1 109.9 193.1C109.9 193.1 213.7 125.3 219.6 60.9C219.9 59.1 220 57.2 220 55.3Z"
                    fill="#DD181F"
                  />
                </svg>
              </span>
            </span>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default BetSlip;
