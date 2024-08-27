// --------------------------
const createEvent = (req, res) => {
  try {
    const {id, email} = req.user
    const form = req.body
    
    form.info.userId = id
    
    const eventId = services.event.info.add(form.info)
    
    form.info.id = eventId
    
    services.event.categories.add(form)
    
    res.status(200).json("create event was completed")
  } catch (err) {
    res.status(400).json(err.message)
  }
}
const editEvent = (req, res) => {
  try {
    const {id, email} = req.user
    const form = req.body
    
    form.info.userId = id
    
    // проверка пренадлежности мероприятия пользователю
    
    services.event.info.edit(form.info)
    
    services.event.categories.edit(form)
    
    res.status(200).json("edit event was complete")
  } catch (err) {
    res.status(400).json(err.message)
  }
}
const getEventById = (req, res) => {
  try {
    const { id } = req.query
    
    const info = services.event.info.get(id)
    const categories = services.event.categories.get(id)
    
    const response = {
      info, categories
    }
    
    res.status(200).json("get event complete")
    console.log(response)
  } catch (err) {
    res.status(400).json(err.message)
  }
}

const res = {
  status: (num) => {
    console.log("status: ", num)
    return {
      json: (str) => {
        console.log("json: ", str)
      }
    }
  }
}

// case
const req1 = {
  user: {
    id: 1,
    email: "lmz@yandex.ru"
  },
  body: {
    info: {
      title: "Завод",
      describe: "",
      geoPoint: ""
    },
    categories: [1, 2]
  }
}
createEvent(req1, res)

const req2 = {
  user: {
    id: 2,
    email: "cap@yandex.ru"
  },
  body: {
    info: {
      title: "Завод",
      describe: "",
      geoPoint: ""
    },
    categories: [1, 2]
  }
}
createEvent(req2, res)

const req3 = {
  user: {
    id: 1,
    email: "zaz@yandex.ru"
  },
  body: {
    info: {
      title: "Крокус",
      describe: "",
      geoPoint: ""
    },
    categories: [3, 4]
  }
}
createEvent(req3, res)

const req4 = {
  query: {
    id: 3
  }
}
getEventById(req4, res)