ESX = nil

TriggerEvent('esx:getSharedObject', function(obj)
    ESX = obj
end)

-- command for admin menu
ESX.RegisterCommand('announce', 'admin', function(xPlayer, args, showError)
    local message = args.message
    TriggerClientEvent('sendMessageAnnounceIt', -1, message)
end, false,
    { help = "Send Server Announcement",
        arguments = { { name = 'message', help = 'Enter Announcement message', type = 'string' } }
    })
